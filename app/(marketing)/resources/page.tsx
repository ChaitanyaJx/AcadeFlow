import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Video, BookOpen, HelpCircle, Download, ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Resources & Support
        </h1>
        <p className="text-xl text-gray-600">
          Everything you need to get started and make the most of AcadeFlow.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="group hover:shadow-lg transition-all">
          <CardHeader className="p-6">
            <FileText className="h-10 w-10 text-blue-600 mb-4" />
            <CardTitle>Documentation</CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-gray-600 mb-6">
              Comprehensive guides and API documentation for all features.
            </p>
            <Button variant="outline" className="w-full group" asChild>
              <Link href="/docs">
                View Docs
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all">
          <CardHeader className="p-6">
            <Video className="h-10 w-10 text-blue-600 mb-4" />
            <CardTitle>Video Tutorials</CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-gray-600 mb-6">
              Step-by-step video guides for every feature and workflow.
            </p>
            <Button variant="outline" className="w-full group" asChild>
              <Link href="/tutorials">
                Watch Tutorials
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all">
          <CardHeader className="p-6">
            <BookOpen className="h-10 w-10 text-blue-600 mb-4" />
            <CardTitle>Best Practices</CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-gray-600 mb-6">
              Learn from real-world examples and implementation guides.
            </p>
            <Button variant="outline" className="w-full group" asChild>
              <Link href="/guides">
                Read Guides
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-blue-50 border-none">
          <CardContent className="p-8">
            <HelpCircle className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-6">
              Our support team is available 24/7 to assist you with any questions.
            </p>
            <Button asChild>
              <Link href="/support">Contact Support</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-none">
          <CardContent className="p-8">
            <Download className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Downloads</h3>
            <p className="text-gray-600 mb-6">
              Access templates, sample rubrics, and other helpful resources.
            </p>
            <Button asChild>
              <Link href="/downloads">Download Resources</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

