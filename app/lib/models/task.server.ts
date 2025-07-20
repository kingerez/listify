import { ObjectId } from 'mongodb';
import { getDatabase } from '../db.server';

export interface Task {
  _id?: ObjectId;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export async function createTask(taskData: Omit<Task, '_id' | 'createdAt' | 'updatedAt'>) {
  const db = getDatabase();
  const tasks = db.collection<Task>('tasks');
  
  const task: Omit<Task, '_id'> = {
    ...taskData,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const result = await tasks.insertOne(task);
  return result;
}

export async function getAllTasks() {
  const db = getDatabase();
  const tasks = db.collection<Task>('tasks');
  return await tasks.find({}).toArray();
}

export async function getTaskById(id: string) {
  const db = getDatabase();
  const tasks = db.collection<Task>('tasks');
  return await tasks.findOne({ _id: new ObjectId(id) });
}

export async function updateTask(id: string, updates: Partial<Omit<Task, '_id' | 'createdAt'>>) {
  const db = getDatabase();
  const tasks = db.collection<Task>('tasks');
  
  const result = await tasks.updateOne(
    { _id: new ObjectId(id) },
    { 
      $set: { 
        ...updates, 
        updatedAt: new Date() 
      } 
    }
  );
  
  return result;
}

export async function deleteTask(id: string) {
  const db = getDatabase();
  const tasks = db.collection<Task>('tasks');
  return await tasks.deleteOne({ _id: new ObjectId(id) });
} 