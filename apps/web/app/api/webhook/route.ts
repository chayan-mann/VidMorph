import { NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary"
import { MongoClient } from "mongodb"

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "demo",
  api_key: process.env.CLOUDINARY_API_KEY || "",
  api_secret: process.env.CLOUDINARY_API_SECRET || "",
})

// MongoDB connection
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"
const client = new MongoClient(uri)
const dbName = "video-transformation"

export async function POST(request: Request) {
  try {
    // Verify webhook signature (in a real app)
    // const signature = request.headers.get("x-fal-signature");
    // if (!verifySignature(signature, await request.text())) {
    //   return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    // }

    const webhookData = await request.json()
    const { request_id, output } = webhookData

    if (!request_id || !output || !output.video_url) {
      return NextResponse.json({ error: "Invalid webhook data" }, { status: 400 })
    }

    // Upload the transformed video to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(output.video_url, {
      resource_type: "video",
      folder: "transformed-videos",
    })

    // Update the history record in MongoDB
    await client.connect()
    const db = client.db(dbName)
    const historyCollection = db.collection("history")

    await historyCollection.updateOne(
      { transformationId: request_id },
      {
        $set: {
          generatedVideoUrl: uploadResult.secure_url,
          status: "completed",
          completedAt: new Date(),
        },
      },
    )

    return NextResponse.json({
      success: true,
      message: "Webhook processed successfully",
    })
  } catch (error) {
    console.error("Error processing webhook:", error)
    return NextResponse.json({ error: "Failed to process webhook" }, { status: 500 })
  }
}
