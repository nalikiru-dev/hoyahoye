"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/mali-africa-circa-august-classroom-black-african-primary-school-students-relaxing-break-middle-morning-mali-125906264.webp"
          alt="Ethiopian students"
          fill
          className="object-cover"
          priority
        />
         
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/80 to-primary/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col justify-center h-full">
        <div className="max-w-3xl text-white space-y-4 md:space-y-6 pt-16 md:pt-0">
          
          
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block text-white">HoyaHoye</span>
            <span className="block text-primary mt-2">Turning Talents into Businesses</span>
          </h1>
          <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 text-sm font-medium text-white">
            <Star className="mr-2 h-4 w-4 text-primary" />
            <span>A Movement by Students, for Students</span>
          </div>
          <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl">
            Every Ethiopian student has hidden talents that can become successful businesses. We provide the digital
            tools and support to make those talents visible to the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Button
              size="lg"
              asChild
              className="rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Link href="/join">Join our Movement</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              asChild
            >
              <Link href="/about" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating card - Only visible on larger screens */}
        <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-80 h-auto">
          <motion.div
            className="relative p-[2px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated border */}
            
            {/* Content container with glass effect */}
            <div className="relative rounded-xl bg-white/20 backdrop-blur-xl p-6 shadow-lg">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute -top-3 -right-3 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full"
              >
                New
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-white font-bold text-lg mb-2">Interesting Story</h3>
                <p className="text-white/90 text-sm mb-4">
                  "Story: Dani and I studied together until Grade 10—he dropped out to shine shoes, I kept going and graduated top of my class. Years later, I applied for a job and saw Dani—now the owner. That moment taught me: education alone isn't enough; it needs to walk with Business."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/95 backdrop-blur-sm overflow-hidden items-center justify-center flex">
                    <h1 className="text-primary text-lg text-center font-bold">N</h1>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Nati B</p>
                    <p className="text-white/60 text-xs"></p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="white"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
