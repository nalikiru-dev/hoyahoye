import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Youtube, Users, BookOpen, Building, Globe, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HeroSection from "@/components/hero-section"
import DepartmentCard from "@/components/department-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />

        <section className="container  py-12 md:py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 shape-blob blur-3xl opacity-70" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 shape-blob-2 blur-3xl opacity-70" />

          <div className="flex flex-col items-center justify-center space-y-4 text-center relative z-10">
            <div className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-4 py-1.5 text-sm shadow-md">
              <span className="font-medium red-gradient-text">Our Mission</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Turning Talents into Businesses
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Every student has hidden talents that can become successful businesses. We provide the digital tools and
              support to make those talents visible to the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative z-10">
            <Card className="rounded-2xl border-none shadow-lg overflow-hidden card-hover">
             <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/40 p-3 rounded-xl">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Student-Led</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built by students and teachers, for students. We understand the challenges and opportunities unique to
                  Ethiopian students.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-none shadow-lg overflow-hidden card-hover">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/40 p-3 rounded-xl">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Education Reform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Changing education from the inside out by focusing on practical skills and entrepreneurship.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-none shadow-lg overflow-hidden card-hover">
             <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/40 p-3 rounded-xl">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Digital Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leveraging digital tools to make Ethiopian student talents visible to the global market.
                </p>
              </CardContent>
            </Card>
            </div>
        </section>

        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 py-12 md:py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/70 to-primary/50" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 shape-blob blur-3xl opacity-70" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 shape-blob-2 blur-3xl opacity-70" />

          <div className="container relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full bg-white dark:bg-gray-800 px-4 py-1.5 text-sm shadow-md">
                <span className="font-medium red-gradient-text">Our Departments</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Specialized Teams Working Together</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Each department plays a crucial role in our movement, collaborating to create opportunities for
                students.
              </p>
            </div>

            <Tabs defaultValue="digital" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-7 mb-8 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50 p-1 rounded-full">
                <TabsTrigger
                  value="digital"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
                >
                  Digital
                </TabsTrigger>
                <TabsTrigger
                  value="content"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
                >
                  Content
                </TabsTrigger>
                <TabsTrigger
                  value="member"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
                >
                  Member
                </TabsTrigger>
                <TabsTrigger
                  value="outreach"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
                >
                  Outreach
                </TabsTrigger>
                <TabsTrigger
                  value="finance"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
                >
                  Finance
                </TabsTrigger>
                <TabsTrigger
                  value="teach"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
                >
                  Teach
                </TabsTrigger>
                <TabsTrigger
                  value="business"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
                >
                  Business
                </TabsTrigger>
              </TabsList>
              <TabsContent value="digital">
                <DepartmentCard
                  title="Digital Department"
                  description="Building digital tools and platforms to showcase student talents and businesses. Responsible for website development, app creation, and digital strategy."
                  icon={<Globe className="h-10 w-10" />}
                  projects={["Website Development", "Social Media Management", "Digital Marketing"]}
               
                />
              </TabsContent>
              <TabsContent value="content">
                <DepartmentCard
                  title="Content Creator Department"
                  description="Producing high-quality educational and promotional content across various platforms. Creating videos, articles, and social media content to spread our message."
                  icon={<Youtube className="h-10 w-10" />}
                  projects={["YouTube Educational Series", "Social Media Content", "Success Stories Documentation"]}
          
                />
              </TabsContent>
              <TabsContent value="member">
                <DepartmentCard
                  title="Member Department"
                  description="Managing recruitment, onboarding, and engagement of new members. Building a strong community of students and educators."
                  icon={<Users className="h-10 w-10" />}
                  projects={["Member Recruitment", "Community Building", "Student Engagement Programs"]}
                  />
              </TabsContent>
              <TabsContent value="outreach">
                <DepartmentCard
                  title="Outreach Department"
                  description="Connecting with schools, universities, businesses, and government entities. Building partnerships to expand our impact."
                  icon={<MessageCircle className="h-10 w-10" />}
                  projects={["School Partnerships", "Business Connections", "Community Outreach Events"]}
                 
                />
              </TabsContent>
              <TabsContent value="finance">
                <DepartmentCard
                  title="Finance Department"
                  description="Managing the movement's resources, fundraising, and ensuring sustainable operations. Supporting student businesses with financial guidance."
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10"
                    >
                      <circle cx="12" cy="12" r="8" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  }
                  projects={["Fundraising Initiatives", "Financial Management", "Business Grant Programs"]}
             
                />
              </TabsContent>
              <TabsContent value="teach">
                <DepartmentCard
                  title="Teach Department"
                  description="Developing curriculum and educational content to help students identify and develop their talents. Conducting workshops and training sessions."
                  icon={<BookOpen className="h-10 w-10" />}
                  projects={["Skill Development Workshops", "Entrepreneurship Curriculum", "Mentorship Programs"]}
                
                />
              </TabsContent>
              <TabsContent value="business">
                <DepartmentCard
                  title="Business Department"
                  description="Supporting student entrepreneurs in launching and growing their businesses. Managing the Telegram shopping bot and other business initiatives."
                  icon={<Building className="h-10 w-10" />}
                  projects={["Telegram Shopping Bot", "Business Incubation", "Market Connection Services"]}
                 
                />
              </TabsContent>
            </Tabs>

            <div className="flex justify-center mt-8">
              <Link href="/departments">
                <Button
                  variant="outline"
                  className="gap-2 rounded-full border-primary text-primary hover:bg-primary/10 group"
                >
                  View All Departments
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 shape-blob blur-3xl opacity-70" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 shape-blob-2 blur-3xl opacity-70" />

          <div className="flex flex-col items-center justify-center space-y-4 text-center relative z-10 mb-12">
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
            {[1, 2, 3].map((video) => (
              <Card key={video} className="overflow-hidden rounded-2xl border-none shadow-lg card-hover">
                <div className="relative aspect-video group">
                  <img
                    src={video === 1 
                      ? "/trigon.png" 
                      : video === 2 
                        ? "/electromagneticwaves.png" 
                        : "/success.jpg"}
                    alt={video === 1 
                      ? "Trigonometry Tutorial" 
                      : video === 2 
                        ? "Electromagnetic Spectrum" 
                        : "Success Story"}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 text-white hover:bg-primary transition-all duration-300 cursor-pointer transform group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="h-8 w-8"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-16" />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-xs text-white">
                    <span className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                      <Youtube className="h-3 w-3 mr-1 text-red" />
                      
                    </span>
                    <span className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">{video} weeks ago</span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-lg line-clamp-2 mb-2 group-hover:text-primary transition-colors duration-300">
                    {video === 1
                      ? "Solving Trigonometirc Functions: For All Students"
                      : video === 2
                        ? "Defination of ElectroMagnetic Spectrum"
                        : "Success Story: From Student Project to Business"}
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
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 py-12 md:py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/70 to-primary/50" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 shape-blob blur-3xl opacity-70" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 shape-blob-2 blur-3xl opacity-70" />

          <div className="container relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full bg-white dark:bg-gray-800 px-4 py-1.5 text-sm shadow-md">
                <span className="font-medium red-gradient-text">Success Stories</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Hear from Our Students</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Real stories from Ethiopian students who have transformed their talents into businesses through
                HoyaHoye.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Abebe Kebede",
                  role: "Computer Science Student",
                  quote:
                    "HoyaHoye helped me turn my coding skills into a freelance business. I'm now earning while studying and building my portfolio for the future.",
                },
                {
                  name: "Tigist Haile",
                  role: "Digital Content Creator",
                  quote:
                    "The content creation department gave me the skills and confidence to start my own YouTube channel. Now I'm teaching others and building my personal brand.",
                },
                {
                  name: "Dawit Mekonnen",
                  role: "Business Student",
                  quote:
                    "Through HoyaHoye's Telegram shopping bot, I've been able to sell my handmade crafts to customers across Ethiopia. It's amazing how digital tools can expand your reach.",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border-none shadow-lg card-hover"
                >
                  <CardContent className="p-6 space-y-4 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary/20 absolute top-4 right-4"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                    <div className="pt-6">
                      <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 shape-blob blur-3xl opacity-70" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 shape-blob-2 blur-3xl opacity-70" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-4 py-1.5 text-sm shadow-md">
                <span className="font-medium red-gradient-text">Join the Movement</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Be Part of the Change</h2>
              <p className="text-muted-foreground md:text-xl">
                Whether you're a student with a talent to develop, a teacher wanting to support the next generation, or
                a business looking to partner with emerging entrepreneurs, there's a place for you in HoyaHoye.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/join">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Join as a Student
                  </Button>
                </Link>
                <Link href="/partner">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto rounded-full border-primary text-primary hover:bg-primary/10"
                  >
                    Partner with Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/20 z-10 mix-blend-overlay" />
              <Image
                src="/change.jpeg"
                alt="Students collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-10 w-10 bg-white flex align-center justify-center items-center overflow-hidden rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
               <h1 className="text-primary text-md text-center font-bold">HO</h1>
              
                </div>
                <span className="text-xl font-bold text-white">HoyaHoye</span>
              </Link>
              <p className="text-sm text-white/70">
                Turning student talents into successful businesses through digital tools and education.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white/90">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/departments"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Departments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white/90">Departments</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/departments/digital"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Digital
                  </Link>
                </li>
                <li>
                  <Link
                    href="/departments/content"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Content Creator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/departments/business"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/departments/teach"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Teach
                  </Link>
                </li>
                <li>
                  <Link
                    href="/departments/all"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    View All
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white/90">Connect With Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://t.me/start_hoyahoye"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://youtube.com/hoyahoye"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://instagram.com/hoyahoye"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/hoyahoye"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/50">© 2017 HoyaHoye. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/terms" className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
