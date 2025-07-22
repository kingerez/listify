import { json } from "@remix-run/node";
import connectToDatabase from "~/lib/db.server";

export async function loader() {
  try {
    await connectToDatabase();
    return json({ 
      status: "success", 
      message: "Successfully connected to MongoDB",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return json({ 
      status: "error", 
      message: "Failed to connect to MongoDB",
      error: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
} 