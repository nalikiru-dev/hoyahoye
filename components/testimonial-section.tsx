import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Abebe Kebede",
      role: "Computer Science Student",
      avatar: "/placeholder-user.jpg",
      quote:
        "HoyaHoye helped me turn my coding skills into a freelance business. I'm now earning while studying and building my portfolio for the future.",
    },
    {
      id: 2,
      name: "Tigist Haile",
      role: "Digital Content Creator",
      avatar: "/placeholder-user.jpg",
      quote:
        "The content creation department gave me the skills and confidence to start my own YouTube channel. Now I'm teaching others and building my personal brand.",
    },
    {
      id: 3,
      name: "Dawit Mekonnen",
      role: "Business Student",
      avatar: "/placeholder-user.jpg",
      quote:
        "Through HoyaHoye's Telegram shopping bot, I've been able to sell my handmade crafts to customers across Ethiopia. It's amazing how digital tools can expand your reach.",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-hoya-dark/5 via-muted to-hoya-dark/5 py-12 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hoya-primary via-hoya-secondary to-hoya-accent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-hoya-primary/10 shape-blob blur-3xl opacity-70" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-hoya-secondary/10 shape-blob-2 blur-3xl opacity-70" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm shadow-md">
            <span className="font-medium gradient-text">Success Stories</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Hear from Our Students</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Real stories from Ethiopian students who have transformed their talents into businesses through HoyaHoye.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="bg-white dark:bg-hoya-dark/80 backdrop-blur-sm rounded-2xl border-none shadow-lg card-hover"
            >
              <CardContent className="p-6 space-y-4 relative">
                <Quote className="h-10 w-10 text-hoya-primary/20 absolute top-4 right-4" />
                <div className="pt-6">
                  <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <Avatar className="h-12 w-12 border-2 border-hoya-primary/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-hoya-primary to-hoya-secondary text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
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
  )
}
