import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Youtube, BookOpen, FileText, ExternalLink, Search, ArrowRight } from "lucide-react"

export default function ResourcesPage() {
  // Sample YouTube videos - these would be fetched from the YouTube API in a real implementation
  const videos = [
    {
      id: "video1",
      title: "How to be Multilingual or Dualingual",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      views: "",
      date: "2 weeks ago",
      category: "skills",
    },
    {
      id: "video2",
      title: "Defination and clear Explanation About Protien, Lipds, Carbohydrates",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      views: "",
      date: "1 month ago",
      category: "business",
    },
    {
      id: "video3",
      title: "Defining The Concept And Idea of Magnetism",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      views: "",
      date: "3 weeks ago",
      category: "success",
    },
    {
      id: "video4",
      title: "Clarifing Each and Every ElecroMagnetic Spectrum Waves",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      views: "",
      date: "1 month ago",
      category: "skills",
    },
    {
      id: "video5",
      title: "How to Solve A Trigonometric Equation",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      views: "",
      date: "2 months ago",
      category: "business",
    },
    {
      id: "video6",
      title: "Student Entrepreneur Interview: Tech Startup Journey",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      views: "",
      date: "1 month ago",
      category: "success",
    },
  ]

  // Sample articles and guides
  const articles = [
    {
      id: "article1",
      title: "10 Steps to Turn Your Skill into a Business",
      image: "/placeholder.svg?height=400&width=600",
      date: "January 15, 2017",
      category: "business",
      excerpt: "A comprehensive guide to help students transform their skills into profitable businesses.",
    },
    {
      id: "article2",
      title: "Finding Your Hidden Talents: A Self-Assessment Guide",
      image: "/placeholder.svg?height=400&width=600",
      date: "February 3, 2017",
      category: "skills",
      excerpt: "Practical exercises and questions to help you discover your unique talents and strengths.",
    },
    {
      id: "article3",
      title: "Digital Tools Every Student Entrepreneur Needs",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 10, 2017",
      category: "tools",
      excerpt: "A curated list of free and affordable digital tools to help you start and grow your business.",
    },
    {
      id: "article4",
      title: "How to Use Social Media to Promote Your Student Business",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 5, 2017",
      category: "marketing",
      excerpt: "Strategies and tips for effective social media marketing on a student budget.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-muted">
          <div className="container py-12 md:py-24">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-lg bg-background px-3 py-1 text-sm">
                <span className="font-medium">Learning Resources</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
                Educational Content for Student Entrepreneurs
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Access our library of videos, articles, and guides to help you discover, develop, and monetize your
                talents.
              </p>

              <div className="w-full max-w-md mt-6">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search resources..." className="w-full bg-background pl-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700">
              <Youtube className="mr-1 h-4 w-4" />
              <span className="font-medium">YouTube Content</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Learn and Grow with Our Videos</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Educational content created by students for students. Practical skills, success stories, and business
              guidance.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">All Videos</TabsTrigger>
              <TabsTrigger value="skills">Skills Development</TabsTrigger>
              <TabsTrigger value="business">Business Tips</TabsTrigger>
              <TabsTrigger value="success">Success Stories</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <Card key={video.id} className="overflow-hidden">
                    <div className="relative aspect-video">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/70 rounded-full p-3 text-white hover:bg-red-600 transition-colors cursor-pointer">
                          <Youtube className="h-8 w-8" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-lg line-clamp-2 mb-2">{video.title}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{video.views} views</span>
                        <span>{video.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {["skills", "business", "success"].map((category) => (
              <TabsContent key={category} value={category} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {videos
                    .filter((video) => video.category === category)
                    .map((video) => (
                      <Card key={video.id} className="overflow-hidden">
                        <div className="relative aspect-video">
                          <img
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black/70 rounded-full p-3 text-white hover:bg-red-600 transition-colors cursor-pointer">
                              <Youtube className="h-8 w-8" />
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-medium text-lg line-clamp-2 mb-2">{video.title}</h3>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>{video.views} views</span>
                            <span>{video.date}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="flex justify-center mt-10">
            <Link href="https://youtube.com/hoyahoye" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                Visit Our YouTube Channel
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-lg bg-background px-3 py-1 text-sm">
                <FileText className="mr-1 h-4 w-4" />
                <span className="font-medium">Articles & Guides</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">In-Depth Resources</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive articles, guides, and tutorials to help you on your entrepreneurial journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-[200px] md:h-auto">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col">
                      <CardHeader className="p-0 mb-2">
                        <div className="text-sm text-muted-foreground mb-2">{article.date}</div>
                        <CardTitle className="text-xl">{article.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 mb-4 flex-1">
                        <p className="text-muted-foreground">{article.excerpt}</p>
                      </CardContent>
                      <CardFooter className="p-0">
                        <Button variant="outline" asChild>
                          <Link href={`/resources/articles/${article.id}`} className="inline-flex items-center">
                            Read Article
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                <BookOpen className="mr-1 h-4 w-4" />
                <span className="font-medium">Workshops & Training</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Hands-On Learning Experiences</h2>
              <p className="text-muted-foreground text-lg">
                Join our interactive workshops and training sessions led by experienced mentors and successful student
                entrepreneurs.
              </p>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="font-medium">Digital Marketing Workshop</div>
                  <div className="text-sm text-muted-foreground">June 15, 2017 • Online</div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="font-medium">Business Model Canvas Training</div>
                  <div className="text-sm text-muted-foreground">July 2, 2017 • Addis Ababa University</div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="font-medium">Product Photography for E-commerce</div>
                  <div className="text-sm text-muted-foreground">July 10, 2017 • Online</div>
                </div>
              </div>
              <Button asChild>
                <Link href="/workshops">View All Workshops</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Workshop session" fill className="object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Get the latest resources, workshop announcements, and success stories delivered to your inbox.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Button className="w-full">Subscribe</Button>
                <p className="text-xs text-center text-muted-foreground">
                  By subscribing, you agree to our{" "}
                  <Link href="/terms" className="underline">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
