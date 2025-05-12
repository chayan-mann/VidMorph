"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "../components/ui/button"
import { Upload } from "lucide-react"

interface VideoUploaderProps {
  onUpload: (url: string) => void
}

export function VideoUploader({ onUpload }: VideoUploaderProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [videoPreview, setVideoPreview] = useState<string | null>(null)
  const uploaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize Uploadcare widget when component mounts
    if (typeof window !== "undefined" && uploaderRef.current) {
      // This is a simplified version. In a real app, you'd use the Uploadcare SDK properly
      const mockUploadProcess = () => {
        setIsUploading(true)

        // Simulate upload progress
        let progress = 0
        const interval = setInterval(() => {
          progress += 5
          setUploadProgress(progress)

          if (progress >= 100) {
            clearInterval(interval)
            setIsUploading(false)
            // In a real app, this would be the URL returned by Uploadcare
            const mockVideoUrl = "https://example.com/sample-video.mp4"
            setVideoPreview(mockVideoUrl)
            onUpload(mockVideoUrl)
          }
        }, 200)
      }

      // In a real app, this would be replaced with actual Uploadcare initialization
      if (uploaderRef.current) {
        uploaderRef.current.onclick = () => {
          // Simulate file selection
          const input = document.createElement("input")
          input.type = "file"
          input.accept = "video/*"
          input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0]
            if (file) {
              mockUploadProcess()
            }
          }
          input.click()
        }
      }
    }
  }, [onUpload])

  return (
    <div>
      {!isUploading && !videoPreview ? (
        <div
          ref={uploaderRef}
          className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:bg-accent/50 transition-colors"
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium mb-2">Upload files</h3>
          <p className="text-sm text-gray-400 mb-4">Drag and drop video files or click to browse</p>
          <Button variant="outline" size="sm">
            Browse Files
          </Button>
          <p className="mt-4 text-xs text-gray-400">Supported formats: MP4, MOV, AVI, WebM (max 500MB)</p>
        </div>
      ) : isUploading ? (
        <div className="border border-border rounded-lg p-8 text-center">
          <h3 className="text-lg font-medium mb-4">Uploading...</h3>
          <div className="w-full bg-accent rounded-full h-2.5 mb-2">
            <div className="bg-primary h-2.5 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
          </div>
          <p className="text-sm text-gray-400">{uploadProgress}% complete</p>
        </div>
      ) : videoPreview ? (
        <div className="border border-border rounded-lg p-4 text-center">
          <video src={videoPreview} controls className="max-h-[200px] mx-auto rounded mb-4" />
          <div className="flex justify-between items-center">
            <p className="text-sm truncate">Video uploaded successfully</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setVideoPreview(null)
                onUpload("")
              }}
            >
              Remove
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
