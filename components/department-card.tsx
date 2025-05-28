import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface DepartmentCardProps {
  title: string
  description: string
  icon: ReactNode
  projects: string[]
}

export default function DepartmentCard({ title, description, icon, projects }: DepartmentCardProps) {
  // Convert title to URL-friendly format
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/department/i, "")
    .replace(/-+$/, "")

  return (
    <Card className="h-full flex flex-col overflow-hidden border-none shadow-lg card-hover rounded-2xl">
      <CardHeader className="flex flex-row items-start gap-4 pb-2">
        <div className="bg-gradient-to-br from-primary/20 to-primary/40 p-4 rounded-2xl text-primary">{icon}</div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="mt-2">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pt-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Current Projects:</h4>
          <div className="flex flex-wrap gap-2">
            {projects.map((project, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20 rounded-full"
              >
                {project}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Link
          href={`/departments/${slug}`}
          className="text-sm text-primary font-medium inline-flex items-center hover:underline group"
        >
          Learn more about this department
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  )
}
