/* eslint-disable no-undef */
// MongoDB initialization script for Listify app
db = db.getSiblingDB('listify');

// Create collections
db.createCollection('tasks');
db.createCollection('users');

// Create indexes for better performance
db.tasks.createIndex({ "userId": 1 });
db.tasks.createIndex({ "dueDate": 1 });
db.tasks.createIndex({ "createdAt": 1 });

// Insert sample data for development
db.tasks.insertMany([
  {
    title: "Learn Javascript",
    description: "Complete the JavaScript fundamentals course",
    status: "in-progress",
    priority: "high",
    dueDate: new Date("2024-04-15"),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Build React App",
    description: "Create a task management application",
    status: "pending", 
    priority: "medium",
    dueDate: new Date("2024-04-20"),
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

print('Database initialized with sample data'); 