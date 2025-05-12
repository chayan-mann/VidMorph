"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Slider } from "../../components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { VideoUploader } from "../../components/video-uploader"
import { HistoryDialog } from "../../components/history-dialog"
import { Wand2 } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"

export default function TransformPage() {
  const router = useRouter()
  const { isSignedIn, user } = useUser()
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [transformationParams, setTransformationParams] = useState({
    style: "cinematic",
    intensity: 50,
    resolution: "720p",
  })

  const handleVideoUpload = (url: string) => {
    setVideoUrl(url)
  }

  const handleTransform = async () => {
    if (!isSignedIn) {
      toast("Authentication required",{ 
        description: "Please sign in to transform videos",
      })
      router.push("/sign-in")
      return
    }

    if (!videoUrl) {
      toast("No video selected",{
        description: "Please upload a video first",
      })
      return
    }

    setIsProcessing(true)

    try {
      const response = await fetch("/api/transform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoUrl,
          params: transformationParams,
          userId: user?.id,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to transform video")
      }

      const data = await response.json()

      toast("Transformation started",{
        description: "You will be notified when your video is ready",
      })

      // In a real app, you might want to redirect to a status page or show a progress indicator
    } catch (error) {
      console.error("Error transforming video:", error)
      toast("Error",{
        description: "Failed to transform video. Please try again.",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">AI Video-to-Video Transformation</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Transform your videos using advanced AI technology. Upload a source video and specify transformation
          parameters to generate a stylized or enhanced output video.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-secondary rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Upload Video</h2>
            <VideoUploader onUpload={handleVideoUpload} />
          </div>

          <div className="bg-secondary rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Transformation Parameters</h2>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium">Style</label>
                <Select
                  value={transformationParams.style}
                  onValueChange={(value) => setTransformationParams({ ...transformationParams, style: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cinematic">Cinematic</SelectItem>
                    <SelectItem value="anime">Anime</SelectItem>
                    <SelectItem value="3d">3D Animation</SelectItem>
                    <SelectItem value="vintage">Vintage</SelectItem>
                    <SelectItem value="noir">Film Noir</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Intensity</label>
                <Slider
                  value={[transformationParams.intensity]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => setTransformationParams({ ...transformationParams, intensity: value[0] })}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Subtle</span>
                  <span>{transformationParams.intensity}%</span>
                  <span>Strong</span>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Output Resolution</label>
                <Select
                  value={transformationParams.resolution}
                  onValueChange={(value) => setTransformationParams({ ...transformationParams, resolution: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select resolution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="480p">480p</SelectItem>
                    <SelectItem value="720p">720p</SelectItem>
                    <SelectItem value="1080p">1080p</SelectItem>
                    <SelectItem value="4k">4K</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Button
            className="w-full py-6 text-lg bg-primary hover:bg-primary/90"
            onClick={handleTransform}
            disabled={!videoUrl || isProcessing}
          >
            <Wand2 className="mr-2 h-5 w-5" />
            {isProcessing ? "Processing..." : "Transform Video"}
          </Button>

          <div className="flex justify-center">
            <HistoryDialog />
          </div>
        </div>

        <div className="bg-secondary rounded-xl p-6 h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Preview</h2>

          <Tabs defaultValue="source" className="flex-1 flex flex-col">
            <TabsList className="mb-4">
              <TabsTrigger value="source">Source Video</TabsTrigger>
              <TabsTrigger value="output">Output Video</TabsTrigger>
            </TabsList>

            <TabsContent value="source" className="flex-1 flex items-center justify-center">
              {videoUrl ? (
                <video src={videoUrl} controls className="max-h-[400px] max-w-full rounded-lg" />
              ) : (
                <div className="text-center p-12 border border-dashed border-border rounded-lg">
                  <div className="flex justify-center mb-4">
                    <svg
                      className="h-12 w-12 text-gray-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m7 4 10 8-10 8V4Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Ready to Create Your Video</h3>
                  <p className="text-gray-400">Upload a video to see a preview here</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="output" className="flex-1 flex items-center justify-center">
              <div className="text-center p-12 border border-dashed border-border rounded-lg">
                <div className="flex justify-center mb-4">
                  <svg
                    className="h-12 w-12 text-gray-400"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Transformed Video</h3>
                <p className="text-gray-400">Your transformed video will appear here after processing</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
