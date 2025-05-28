import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react"
import { sendEmail } from "./actions"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function ContactPage() {
  async function handleSubmit(formData: FormData) {
    'use server'
    
    const result = await sendEmail(formData)
    if (!result.success) {
      return { error: 'Failed to send message. Please try again.' }
    }
    return { success: true }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-muted">
          <div className="container py-12 md:py-24">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-lg bg-background px-3 py-1 text-sm">
                <span className="font-medium">Contact Us</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">Get in Touch with HoyaHoye</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Have questions about our movement? Want to join or partner with us? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Our Location</h3>
                      <p className="text-muted-foreground">
                        Addis Ababa University
                        <br />
                        King George VI Street
                        <br />
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email Us</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:hoyahoye2017@gmail.com" className="text-primary hover:underline">
                          hoyahoye2017@gmail.com
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Call Us</h3>
                      <p className="text-muted-foreground">
                        Main Office: +251 11 234 5678
                        <br />
                        Student Support: +251 91 234 5678
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full text-primary">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Social Media</h3>
                      <p className="text-muted-foreground">
                        Connect with us on social media for the latest updates and announcements.
                      </p>
                      <div className="flex gap-4 mt-2">
                        <Link href="https://t.me/hoyahoye" className="text-primary hover:text-primary/80">
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
                            className="h-5 w-5"
                          >
                            <path d="m22 2-7 20-4-9-9-4Z" />
                            <path d="M22 2 11 13" />
                          </svg>
                        </Link>
                        <Link href="https://youtube.com/hoyahoye" className="text-primary hover:text-primary/80">
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
                            className="h-5 w-5"
                          >
                            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                            <path d="m10 15 5-3-5-3z" />
                          </svg>
                        </Link>
                        <Link href="https://instagram.com/hoyahoye" className="text-primary hover:text-primary/80">
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
                            className="h-5 w-5"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        </Link>
                        <Link href="https://twitter.com/hoyahoye" className="text-primary hover:text-primary/80">
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
                            className="h-5 w-5"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="p-6">
                  <form action={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" name="first-name" placeholder="Enter your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" name="last-name" placeholder="Enter your last name" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input id="phone" name="phone" placeholder="Enter your phone number" />
                    </div>

                    <div className="space-y-2">
                      <Label>I am a:</Label>
                      <RadioGroup name="user-type" defaultValue="student" required>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="student" id="student" />
                          <Label htmlFor="student">Student</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="teacher" id="teacher" />
                          <Label htmlFor="teacher">Teacher/Educator</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="business" id="business" />
                          <Label htmlFor="business">Business/Organization</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" placeholder="Enter message subject" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" placeholder="Enter your message" rows={5} required />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about HoyaHoye and how to get involved.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>How can I join HoyaHoye as a student?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You can join by filling out the application form on our Join page, or by contacting us directly at hoyahoye2017@gmail.com. We
                    welcome students from all universities and schools in Ethiopia.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Do I need to have a business idea to join?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No, you don't need to have a business idea already. HoyaHoye helps you discover your talents and
                    develop them into potential business opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How can my organization partner with HoyaHoye?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're always looking for partnerships with organizations that share our vision. Contact us at hoyahoye2017@gmail.com to discuss collaboration opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Are there any fees to join HoyaHoye?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No, HoyaHoye is a free movement for students. We're supported by partnerships, donations, and
                    volunteer work from our members.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Toaster />
    </div>
  )
}
