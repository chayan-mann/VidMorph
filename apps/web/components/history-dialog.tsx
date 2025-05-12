"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import { History, Download, ExternalLink } from "lucide-react"
import { useUser } from "@clerk/nextjs"
import { toast } from "sonner"

interface VideoHistory {
  id: string
  sourceVideoName: string
  transformationParams: {
    style: string
    intensity: number
    resolution: string
  }
  generatedVideoUrl: string
  createdAt: string
}

export function HistoryDialog() {
  const { isSignedIn, user } = useUser()
  const [history, setHistory] = useState<VideoHistory[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchHistory = async () => {
    if (!isSignedIn || !user) return

    setIsLoading(true)
    try {
      const response = await fetch(`/api/history?userId=${user.id}`)
      if (!response.ok) {
        throw new Error("Failed to fetch history")
      }
      const data = await response.json()
      setHistory(data)
    } catch (error) {
      console.error("Error fetching history:", error)
      toast("Error",{
        description: "Failed to load processing history",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // For demo purposes, we'll use mock data
  useEffect(() => {
    if (isSignedIn) {
      // Mock data for demonstration
      setHistory([
        {
          id: "1",
          sourceVideoName: "beach_sunset.mp4",
          transformationParams: {
            style: "cinematic",
            intensity: 75,
            resolution: "1080p",
          },
          generatedVideoUrl: "https://example.com/transformed_beach_sunset.mp4",
          createdAt: new Date(Date.now() - 3600000).toISOString(),
        },
        {
          id: "2",
          sourceVideoName: "city_timelapse.mp4",
          transformationParams: {
            style: "anime",
            intensity: 60,
            resolution: "720p",
          },
          generatedVideoUrl: "https://example.com/transformed_city_timelapse.mp4",
          createdAt: new Date(Date.now() - 86400000).toISOString(),
        },
      ])
    }
  }, [isSignedIn])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={fetchHistory}>
          <History className="mr-2 h-4 w-4" />
          View History
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Processing History</DialogTitle>
          <DialogDescription>
            View your previously processed videos and their transformation parameters.
          </DialogDescription>
        </DialogHeader>

        {!isSignedIn ? (
          <div className="text-center py-8">
            <p className="text-gray-400 mb-4">Please sign in to view your processing history.</p>
            <Button>Sign In</Button>
          </div>
        ) : isLoading ? (
          <div className="text-center py-8">
            <p className="text-gray-400">Loading history...</p>
          </div>
        ) : history.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-400">No processing history found.</p>
          </div>
        ) : (
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {history.map((item) => (
              <div key={item.id} className="border border-border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{item.sourceVideoName}</h3>
                  <span className="text-xs text-gray-400">{new Date(item.createdAt).toLocaleString()}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-3 text-sm">
                  <div>
                    <p className="text-gray-400">Style</p>
                    <p className="capitalize">{item.transformationParams.style}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Intensity</p>
                    <p>{item.transformationParams.intensity}%</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Resolution</p>
                    <p>{item.transformationParams.resolution}</p>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={item.generatedVideoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-4 w-4" />
                      View
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={item.generatedVideoUrl} download>
                      <Download className="mr-1 h-4 w-4" />
                      Download
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
