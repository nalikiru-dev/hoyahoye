import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Target, Lightbulb, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-muted">
          <div className="container py-12 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-lg bg-background px-3 py-1 text-sm">
                  <span className="font-medium">About HoyaHoye</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
                  A Student Movement Changing Education from the Inside Out
                </h1>
                <p className="text-muted-foreground text-lg">
                  HoyaHoye is more than a project—it's a movement built by students and teachers with the mission of
                  transforming how education prepares young Ethiopians for the future.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/mali-africa-circa-august-classroom-black-african-primary-school-students-relaxing-break-middle-morning-mali-125906264.webp"
                  alt="HoyaHoye team members"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              How a small group of passionate students created a nationwide movement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>The Beginning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  HoyaHoye started as a small initiative at a local university, where a group of students recognized
                  that many of their peers had incredible talents that weren't being developed through traditional
                  education.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Growing the Movement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  What began as workshops and small training sessions quickly grew as more students and teachers joined
                  the cause. The movement expanded to multiple universities and schools across Ethiopia.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Where We Are Today</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Today, HoyaHoye is a structured movement with specialized departments, digital platforms, and a
                  growing community of student entrepreneurs who are turning their talents into successful businesses.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission & Vision</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                The guiding principles that drive everything we do at HoyaHoye.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To transform education from the inside out by helping students discover, develop, and monetize their
                    talents through digital tools and entrepreneurial skills, creating a new generation of self-reliant
                    Ethiopian youth.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A future where every Ethiopian student graduates not just with a degree, but with a sustainable
                    business or marketable skill that connects them to global opportunities, reducing unemployment and
                    driving economic growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              The core principles that guide our movement and community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <div className="bg-primary/20 p-3 rounded-full w-fit">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4">Student-Led Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe students are not just the future—they are the present. Their ideas and leadership drive our
                  movement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary/20 p-3 rounded-full w-fit">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                    <path d="M12 13v8" />
                    <path d="M12 3v3" />
                  </svg>
                </div>
                <CardTitle className="mt-4">Practical Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We focus on skills that can be immediately applied to create value, not just theoretical knowledge.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary/20 p-3 rounded-full w-fit">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m7 10 2 2 6-6" />
                  </svg>
                </div>
                <CardTitle className="mt-4">Digital Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We embrace digital tools as the great equalizer, connecting Ethiopian talent to global opportunities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary/20 p-3 rounded-full w-fit">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M17 6.1H3" />
                    <path d="M21 12.1H3" />
                    <path d="M15.1 18H3" />
                  </svg>
                </div>
                <CardTitle className="mt-4">Collaborative Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe in the power of community and shared knowledge to accelerate individual and collective
                  success.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                The dedicated students and educators leading the HoyaHoye movement.
              </p>
            </div>

            <Tabs defaultValue="leadership" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="leadership">Leadership Team</TabsTrigger>
                <TabsTrigger value="department">Department Heads</TabsTrigger>
                <TabsTrigger value="advisors">Advisors</TabsTrigger>
              </TabsList>

              <TabsContent value="leadership" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="bg-background overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src="/placeholder-user.jpg"
                          alt="Team member"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Team Member {i}</CardTitle>
                        <CardDescription>Founder & Director</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Computer Science student with a passion for educational reform and technology
                          entrepreneurship.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="department" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i} className="bg-background overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src="/placeholder-user.jpg"
                          alt="Department head"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Department Head {i}</CardTitle>
                        <CardDescription>Digital Department</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="advisors" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="bg-background overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src="/placeholder-user.jpg"
                          alt="Advisor"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Advisor {i}</CardTitle>
                        <CardDescription>Professor of Entrepreneurship</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Experienced educator and business mentor providing guidance to the HoyaHoye movement.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="container py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join the Movement</h2>
              <p className="text-muted-foreground text-lg">
                HoyaHoye is growing every day, and we're looking for passionate students, educators, and partners to
                join us in our mission to transform education and entrepreneurship in Ethiopia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/join">Join as a Student</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/partner">Partner with Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
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
    </div>
  )
}
