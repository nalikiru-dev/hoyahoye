import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import MainNav from "@/components/main-nav"
import { cn } from "@/lib/utils"
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HoyaHoye - Ethiopian Student Movement",
  description: "Turning student talents into businesses through digital tools and education.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen")}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <MainNav />
          <div className="main-content">{children}</div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
