"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/departments", label: "Departments" },
    { href: "/resources", label: "Resources" },
    { href: "/partners", label: "Partners" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-hoya-dark/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-10">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-hoya-primary animate-pulse-slow">
            <Image src="/logo.png" alt="HoyaHoye Logo" width={40} height={40} className="h-full w-full object-cover" />
          </div>
          <span className="text-xl font-bold gradient-text">HoyaHoye</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:text-hoya-primary group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-hoya-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/join" className="hidden md:block">
            <Button className="rounded-full bg-gradient-to-r from-hoya-primary to-hoya-secondary hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl">
              Join the Movement
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden rounded-full border-hoya-primary/20 hover:bg-hoya-primary/10"
              >
                <Menu className="h-6 w-6 text-hoya-primary" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-hoya-primary/20">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image src="/logo.png" alt="HoyaHoye Logo" width={40} height={40} className="h-10 w-10" />
                    <span className="text-xl font-bold gradient-text">HoyaHoye</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 hover:bg-hoya-primary/10 hover:text-hoya-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-8">
                  <Link href="/join" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full rounded-xl bg-gradient-to-r from-hoya-primary to-hoya-secondary hover:opacity-90 transition-all duration-300">
                      Join the Movement
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
