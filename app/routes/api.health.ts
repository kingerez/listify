import { json } from '@remix-run/node';
import { connectToDatabase } from '../lib/db.server';

export async function loader() {
  try {
    // Test database connection
    await connectToDatabase();
    
    return json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      database: 'connected',
      message: 'All systems operational'
    });
  } catch (error) {
    return json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      database: 'disconnected',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 