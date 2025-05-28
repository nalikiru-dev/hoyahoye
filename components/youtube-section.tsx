import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Youtube, ExternalLink, Play } from "lucide-react"

export default function YouTubeSection() {
  // Sample YouTube videos - these would be fetched from the YouTube API in a real implementation
  const videos = [
    {
      id: 1,
      title: "Solving Trigonometric Functions",
      thumbnail: "/trigon.png",
      views: "1.2K",
      date: "2 weeks ago",
    },
    {
      id: 2,
      title: "Understanding Electromagnetic Spectrum",
      thumbnail: "/electromagneticwaves.png",
      views: "3.5K",
      date: "1 month ago",
    },
    {
      id: 3,
      title: "Success Story: Student to Entrepreneur",
      thumbnail: "/success.jpg",
      views: "2.8K",
      date: "3 weeks ago",
    },
  ]

  return (
    <section className="container py-12 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />

      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 relative z-10">
        <div className="inline-flex items-center rounded-full bg-red-100 px-4 py-1.5 text-sm text-red-700">
          <Youtube className="mr-2 h-4 w-4" />
          <span className="font-medium">YouTube Content</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Learn and Grow with Our Videos</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Educational content created by students for students. Practical skills, success stories, and business
          guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden rounded-2xl border-none shadow-lg card-hover">
            <div className="relative aspect-video group">
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 text-white hover:bg-red-600 transition-all duration-300 cursor-pointer transform group-hover:scale-110">
                  <Play className="h-8 w-8 fill-current" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-16" />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-xs text-white">
                <span className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                  <Youtube className="h-3 w-3 mr-1" />
                  {video.views} views
                </span>
                <span className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">{video.date}</span>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-lg line-clamp-2 mb-2 group-hover:text-hoya-primary transition-colors duration-300">
                {video.title}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-10 relative z-10">
        <Link href="https://youtube.com/hoyahoye" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="gap-2 rounded-full border-red-500 text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            Visit Our YouTube Channel
            <ExternalLink className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
