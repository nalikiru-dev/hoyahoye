"use client";
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, Construction } from "lucide-react"
import { useRouter } from "next/navigation"


const BackButton = () => {
  const router = useRouter()
  
  return (
    <Button
      variant="outline"
      size="lg"
      className="rounded-full group"
      onClick={() => router.back()}
    >
      <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
      Go Back
    </Button>
  )
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-muted">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]"
      />

      <div className="relative z-10 text-center space-y-10 px-6">
        <div className="space-y-6">
          <div className="relative w-40 h-40 mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary to-primary/50 blur-2xl opacity-20 animate-pulse" />
            <div className="relative w-full h-full flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl">
              <Construction className="w-20 h-20 text-primary animate-bounce" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 animate-gradient">
            Coming Soon
          </h1>
          
          <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
            We're working hard to bring you something amazing. This page is under construction or might have been moved to a new location.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="default"
            size="lg"
            className="rounded-full group relative overflow-hidden"
            asChild
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </Button>
          
          <BackButton />
        </div>

        {/* Interactive elements */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { title: "Digital Department", image: "/digital.jpeg" },
            { title: "Content Creation", image: "/content-creator.png" },
            { title: "Student Success", image: "/success.jpg" },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative h-40 rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-medium text-sm">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-center text-sm text-muted-foreground">
        <p>© 2024 HoyaHoye. All rights reserved.</p>
      </div>
    </div>
  )
} 