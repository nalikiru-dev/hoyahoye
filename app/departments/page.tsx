import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Globe, Youtube, Users, MessageCircle, BookOpen, Building } from "lucide-react"

export default function DepartmentsPage() {
  const departments = [
    {
      id: "digital",
      name: "Digital Department",
      icon: <Globe className="h-10 w-10" />,
      description:
        "Building digital tools and platforms to showcase student talents and businesses. Responsible for website development, app creation, and digital strategy.",
      projects: ["Website Development", "Social Media Management", "Digital Marketing"],
      image: "/digital.jpeg",
    },
    {
      id: "content",
      name: "Content Creator Department",
      icon: <Youtube className="h-10 w-10" />,
      description:
        "Producing high-quality educational and promotional content across various platforms. Creating videos, articles, and social media content to spread our message.",
      projects: ["YouTube Educational Series", "Social Media Content", "Success Stories Documentation"],
      image: "/content-creator.png",
    },
    {
      id: "member",
      name: "Member Department",
      icon: <Users className="h-10 w-10" />,
      description:
        "Managing recruitment, onboarding, and engagement of new members. Building a strong community of students and educators.",
      projects: ["Member Recruitment", "Community Building", "Student Engagement Programs"],
      image: "/mali-africa-circa-august-classroom-black-african-primary-school-students-relaxing-break-middle-morning-mali-125906264.webp",
    },
    {
      id: "outreach",
      name: "Outreach Department",
      icon: <MessageCircle className="h-10 w-10" />,
      description:
        "Connecting with schools, universities, businesses, and government entities. Building partnerships to expand our impact.",
      projects: ["School Partnerships", "Business Connections", "Community Outreach Events"],
      image: "/outreach.jpeg",
    },
    {
      id: "finance",
      name: "Finance Department",
      icon: (
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
      ),
      description:
        "Managing the movement's resources, fundraising, and ensuring sustainable operations. Supporting student businesses with financial guidance.",
      projects: ["Fundraising Initiatives", "Financial Management", "Business Grant Programs"],
      image: "/finance.jpeg",
    },
    {
      id: "teach",
      name: "Teach Department",
      icon: <BookOpen className="h-10 w-10" />,
      description:
        "Developing curriculum and educational content to help students identify and develop their talents. Conducting workshops and training sessions.",
      projects: ["Skill Development Workshops", "Entrepreneurship Curriculum", "Mentorship Programs"],
      image: "/computer-programmers-1.webp",
    },
    {
      id: "business",
      name: "Business Department",
      icon: <Building className="h-10 w-10" />,
      description:
        "Supporting student entrepreneurs in launching and growing their businesses. Managing the Telegram shopping bot and other business initiatives.",
      projects: ["Telegram Shopping Bot", "Business Incubation", "Market Connection Services"],
      image: "/success.jpg",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-muted">
          <div className="container py-12 md:py-24">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-lg bg-background px-3 py-1 text-sm">
                <span className="font-medium">Our Departments</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">Specialized Teams Working Together</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Each department plays a crucial role in our movement, collaborating to create opportunities for
                students.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-8 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              {departments.map((dept) => (
                <TabsTrigger key={dept.id} value={dept.id}>
                  {dept.id.charAt(0).toUpperCase() + dept.id.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                {departments.map((dept) => (
                  <Card key={dept.id} className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="relative h-[300px] md:h-auto">
                        <Image src={dept.image} alt={dept.name} fill className="object-cover" />
                      </div>
                      <div className="p-6 flex flex-col">
                        <CardHeader className="flex flex-row items-start gap-4 p-0 mb-4">
                          <div className="bg-primary/20 p-4 rounded-lg text-primary">{dept.icon}</div>
                          <div>
                            <CardTitle className="text-xl">{dept.name}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="p-0 mb-4 flex-1">
                          <p className="text-muted-foreground mb-4">{dept.description}</p>
                          <div className="space-y-2">
                            <h4 className="text-sm font-medium">Current Projects:</h4>
                            <ul className="list-disc pl-5 text-muted-foreground">
                              {dept.projects.map((project, index) => (
                                <li key={index}>{project}</li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                        <CardFooter className="p-0">
                          <Button variant="outline" asChild>
                            <Link href={`/departments/${dept.id}`} className="inline-flex items-center">
                              Learn more
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {departments.map((dept) => (
              <TabsContent key={dept.id} value={dept.id} className="space-y-8">
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-[300px] md:h-auto">
                      <Image src={dept.image} alt={dept.name} fill className="object-cover" />
                    </div>
                    <div className="p-6 flex flex-col">
                      <CardHeader className="flex flex-row items-start gap-4 p-0 mb-4">
                        <div className="bg-primary/20 p-4 rounded-lg text-primary">{dept.icon}</div>
                        <div>
                          <CardTitle className="text-xl">{dept.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0 mb-4 flex-1">
                        <p className="text-muted-foreground mb-4">{dept.description}</p>
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium">Current Projects:</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            {dept.projects.map((project, index) => (
                              <li key={index}>{project}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter className="p-0">
                        <Button variant="outline" asChild>
                          <Link href={`/departments/${dept.id}`} className="inline-flex items-center">
                            Learn more
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Team Members</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                      <Card key={i} className="overflow-hidden">
                        <div className="aspect-square relative">
                          <Image
                            src="/placeholder-user.jpg"
                            alt="Team member"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg">Team Member {i}</CardTitle>
                          <CardDescription>{dept.name}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Recent Achievements</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                      <Card key={i}>
                        <CardHeader>
                          <CardTitle>Achievement {i}</CardTitle>
                          <CardDescription>January 2017</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">
                            Description of a significant achievement or milestone reached by this department.
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join a Department</h2>
                <p className="text-muted-foreground text-lg">
                  Are you a student with skills or interests that align with one of our departments? Join us and be part
                  of the movement to transform education and entrepreneurship in Ethiopia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/join">Apply to Join</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Contact Department Heads</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/join-us-megaphone-vector.jpg"
                  alt="Students working together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
