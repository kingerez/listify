import { MongoClient } from 'mongodb';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

let client: MongoClient;

declare global {
  // eslint-disable-next-line no-var
  var __db: MongoClient | undefined;
}

// This is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
if (process.env.NODE_ENV === 'production') {
  client = new MongoClient(DATABASE_URL);
} else {
  if (!global.__db) {
    global.__db = new MongoClient(DATABASE_URL);
  }
  client = global.__db;
}

export async function connectToDatabase() {
  try {
    await client.connect();
    await client.db().admin().ping();
    console.log('✅ Connected to MongoDB successfully');
    return client;
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error);
    throw error;
  }
}

export function getDatabase(name: string = 'listify') {
  return client.db(name);
}

export { client }; 