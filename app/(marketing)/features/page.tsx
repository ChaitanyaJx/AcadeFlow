import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, FileText, Shield, Clock, BarChart } from 'lucide-react'

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Powerful Features for Academic Excellence
        </h1>
        <p className="text-xl text-gray-600">
          Discover the tools that make AcadeFlow the leading choice for academic grading management.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="group hover:shadow-lg transition-all">
          <CardContent className="p-6">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Role-Based Access</h3>
            <p className="text-gray-600 mb-4">
              Customize permissions and workflows for faculty, TAs, and students with secure role management.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Secure authentication
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Custom permissions
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Hierarchical access
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all">
          <CardContent className="p-6">
            <FileText className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">PDF Grading</h3>
            <p className="text-gray-600 mb-4">
              Grade assignments efficiently with built-in PDF annotation tools and rubric integration.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                In-browser annotations
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Custom rubrics
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Batch processing
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all">
          <CardContent className="p-6">
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Feedback</h3>
            <p className="text-gray-600 mb-4">
              Provide and receive feedback securely with built-in communication channels.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Private comments
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Appeal system
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Audit trails
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all">
          <CardContent className="p-6">
            <Clock className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Time Management</h3>
            <p className="text-gray-600 mb-4">
              Track deadlines and manage grading schedules efficiently.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Deadline tracking
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Calendar integration
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Automated reminders
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all">
          <CardContent className="p-6">
            <BarChart className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Analytics</h3>
            <p className="text-gray-600 mb-4">
              Gain insights with comprehensive grading analytics and reports.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Grade distribution
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Progress tracking
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Custom reports
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

