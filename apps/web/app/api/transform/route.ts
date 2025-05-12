import { NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary"
import { auth } from "@clerk/nextjs/server"
import { MongoClient } from "mongodb"
import * as fal from "@fal-ai/serverless-client"

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "demo",
  api_key: process.env.CLOUDINARY_API_KEY || "",
  api_secret: process.env.CLOUDINARY_API_SECRET || "",
})

// Configure Fal AI
fal.config({
  credentials: process.env.FAL_KEY,
})

// MongoDB connection
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"
const client = new MongoClient(uri)
const dbName = "video-transformation"

export async function POST(request: Request) {
  try {
    const { userId } = auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { videoUrl, params } = await request.json()

    if (!videoUrl) {
      return NextResponse.json({ error: "Video URL is required" }, { status: 400 })
    }

    // Upload to Cloudinary (in a real app, this would be more robust)
    // For demo purposes, we'll just use the provided URL
    const sourceVideoUrl = videoUrl

    // Call Fal API with Hunyuan-Video Model
    // This is a simplified example - in a real app, you'd use the actual model
    const transformationResult = await fal.subscribe("hunyuan-video", {
      input: {
        video_url: sourceVideoUrl,
        style: params.style,
        intensity: params.intensity / 100, // Convert to 0-1 range
        resolution: params.resolution,
      },
      pollInterval: 5000, // Poll every 5 seconds
      onQueueUpdate: (update) => {
        console.log("Queue update:", update)
      },
    })

    // In a real app, you'd handle the webhook response
    // For demo purposes, we'll simulate a successful transformation
    const generatedVideoUrl = "https://example.com/transformed_video.mp4"

    // Store in MongoDB
    await client.connect()
    const db = client.db(dbName)
    const historyCollection = db.collection("history")

    const historyEntry = {
      userId,
      sourceVideoUrl,
      sourceVideoName: "video_" + Date.now() + ".mp4", // In a real app, extract from the URL
      transformationParams: params,
      generatedVideoUrl,
      createdAt: new Date(),
    }

    await historyCollection.insertOne(historyEntry)

    return NextResponse.json({
      success: true,
      message: "Video transformation started",
      transformationId: transformationResult.request_id,
    })
  } catch (error) {
    console.error("Error transforming video:", error)
    return NextResponse.json({ error: "Failed to transform video" }, { status: 500 })
  }
}
