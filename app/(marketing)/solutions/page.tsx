import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, School, BookOpen } from 'lucide-react'
import Link from "next/link"

export default function SolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Solutions for Every Academic Need
        </h1>
        <p className="text-xl text-gray-600">
          Tailored solutions to meet the unique requirements of different academic roles and institutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="group hover:shadow-lg transition-all">
          <CardContent className="p-8">
            <GraduationCap className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">For Universities</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive grading management solution for higher education institutions.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="ml-3 text-gray-600">
                  Centralized grading system for all departments
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="ml-3 text-gray-600">
                  Integration with existing LMS platforms
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="ml-3 text-gray-600">
                  Advanced analytics and reporting tools
                </span>
              </li>
            </ul>
            <Button className="w-full" asChild>
              <Link href="/demo">Schedule Demo</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all">
          <CardContent className="p-8">
            <School className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">For Departments</h3>
            <p className="text-gray-600 mb-6">
              Streamlined workflow solutions for academic departments.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="ml-3 text-gray-600">
                  Customizable grading templates
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="ml-3 text-gray-600">
                  Department-specific analytics
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="ml-3 text-gray-600">
                  Collaborative grading tools
                </span>
              </li>
            </ul>
            <Button className="w-full" asChild>
              <Link href="/demo">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="text-center p-6">
          <CardContent>
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">For Faculty</h3>
            <p className="text-gray-600">
              Efficient tools for managing courses, assignments, and TAs.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center p-6">
          <CardContent>
            <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">For TAs</h3>
            <p className="text-gray-600">
              Streamlined grading interface and collaboration tools.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center p-6">
          <CardContent>
            <GraduationCap className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">For Students</h3>
            <p className="text-gray-600">
              Easy access to grades, feedback, and appeals.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

