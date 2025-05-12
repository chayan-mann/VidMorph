import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { MongoClient } from "mongodb"

// MongoDB connection
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"
const client = new MongoClient(uri)
const dbName = "video-transformation"

export async function GET(request: Request) {
  try {
    const { userId } = auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const limit = Number.parseInt(searchParams.get("limit") || "10")

    await client.connect()
    const db = client.db(dbName)
    const historyCollection = db.collection("history")

    const history = await historyCollection.find({ userId }).sort({ createdAt: -1 }).limit(limit).toArray()

    return NextResponse.json(history)
  } catch (error) {
    console.error("Error fetching history:", error)
    return NextResponse.json({ error: "Failed to fetch history" }, { status: 500 })
  }
}
