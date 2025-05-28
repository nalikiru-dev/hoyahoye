"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activePath, setActivePath] = useState("/")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Set active path based on current URL
    setActivePath(window.location.pathname)

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
    <header className="fixed top-0 z-50 w-full">
      <div className={cn("transition-all duration-500", isScrolled ? "py-3" : "py-5")}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <nav
            className={cn(
              "rounded-2xl transition-all duration-500",
              isScrolled
                ? "bg-background/70 backdrop-blur-xl shadow-lg border border-border/20"
                : "bg-background/40 backdrop-blur-md border border-border/10"
            )}
          >
            <div className="flex items-center justify-between px-6 py-3">
              {/* Logo - Left */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative h-10 w-10 bg-white flex align-center justify-center items-center overflow-hidden rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
               <h1 className="text-primary text-md text-center font-bold">HO</h1>
              
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  HoyaHoye
                </span>
              </Link>

              {/* Desktop Navigation - Center */}
              <div className="hidden md:flex items-center justify-center flex-1 mx-8">
                <div className="flex gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                        activePath === link.href
                          ? "text-white"
                          : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary",
                      )}
                    >
                      {activePath === link.href && <span className="absolute inset-0 bg-primary rounded-full" />}
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Button - Right */}
              <div className="flex items-center gap-4">
                <Link href="/join" className="hidden md:block">
                  <Button className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all duration-300">
                    Join Movement
                  </Button>
                </Link>

                {/* Mobile Menu */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden rounded-full hover:bg-primary/10">
                      <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-[300px] sm:w-[400px] border-l-gray-200 dark:border-l-gray-800"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-8">
                        <Link href="/" className="flex items-center gap-2">
                          <Image src="/logo.png" alt="HoyaHoye Logo" width={40} height={40} className="h-10 w-10" />
                          <span className="text-xl font-bold text-gray-800 dark:text-white">HoyaHoye</span>
                        </Link>
                      </div>
                      <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                              "px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300",
                              activePath === link.href
                                ? "bg-primary/10 text-primary"
                                : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary",
                            )}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </nav>
                      <div className="mt-auto pt-8">
                        <Link href="/join">
                          <Button className="w-full rounded-xl bg-primary hover:bg-primary/90 transition-all duration-300">
                            Join the Movement
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
