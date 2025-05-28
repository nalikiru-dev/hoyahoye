import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Building, ArrowRight } from "lucide-react"

export default function PartnerSection() {
  const partners = [
    { id: 1, name: "Addis Ababa University", logo: "/placeholder-logo.png" },
    { id: 2, name: "Ethiopian Entrepreneurship Center", logo: "/placeholder-logo.png" },
    { id: 3, name: "Digital Ethiopia Initiative", logo: "/placeholder-logo.png" },
    { id: 4, name: "Youth Business Ethiopia", logo: "/placeholder-logo.png" },
    { id: 5, name: "Tech Innovators Hub", logo: "/placeholder-logo.png" },
  ]

  return (
    <section className="container py-12 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-hoya-accent/10 shape-blob-3 blur-3xl opacity-70" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-hoya-primary/10 shape-blob blur-3xl opacity-70" />

      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 relative z-10">
        <div className="inline-flex items-center rounded-full bg-hoya-dark/5 px-4 py-1.5 text-sm shadow-md">
          <Building className="mr-2 h-4 w-4 text-hoya-primary" />
          <span className="font-medium">Our Partners</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Collaborating for Impact</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          We work with educational institutions, businesses, and organizations that share our vision for student
          entrepreneurship.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center relative z-10">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-white dark:bg-hoya-dark/5 rounded-2xl p-6 w-full h-32 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={60}
              className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <Card className="rounded-2xl border-none shadow-lg overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hoya-primary to-hoya-secondary" />
          <CardHeader>
            <CardTitle>Partner with HoyaHoye</CardTitle>
            <CardDescription>
              Join us in our mission to transform education and entrepreneurship in Ethiopia.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              We're looking for organizations that can provide mentorship, resources, funding, or opportunities for our
              student entrepreneurs.
            </p>
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-hoya-primary to-hoya-secondary hover:opacity-90 transition-all duration-300"
            >
              <Link href="/partner" className="inline-flex items-center">
                Become a Partner
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-none shadow-lg overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hoya-secondary to-hoya-accent" />
          <CardHeader>
            <CardTitle>Sponsor a Project</CardTitle>
            <CardDescription>
              Support specific student initiatives and help bring innovative ideas to life.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Your sponsorship can help fund student projects, provide necessary equipment, or support educational
              workshops.
            </p>
            <Button
              variant="outline"
              asChild
              className="rounded-full border-hoya-secondary text-hoya-secondary hover:bg-hoya-secondary/10"
            >
              <Link href="/sponsor" className="inline-flex items-center group">
                Learn About Sponsorship
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
