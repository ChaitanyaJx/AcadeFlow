import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from 'lucide-react'
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-600">
          Choose the plan that best fits your institution's needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card className="relative group hover:shadow-lg transition-all">
          <CardHeader className="p-6">
            <CardTitle>
              <div className="text-lg font-medium mb-2">Starter</div>
              <div className="text-3xl font-bold">$299</div>
              <div className="text-sm text-gray-600">per month</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <ul className="space-y-4 mb-6">
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Up to 500 students
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Basic analytics
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Email support
              </li>
            </ul>
          </CardContent>
          <CardFooter className="p-6">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/demo">Get Started</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="relative group hover:shadow-lg transition-all border-blue-200 bg-blue-50">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
              Most Popular
            </span>
          </div>
          <CardHeader className="p-6">
            <CardTitle>
              <div className="text-lg font-medium mb-2">Professional</div>
              <div className="text-3xl font-bold">$599</div>
              <div className="text-sm text-gray-600">per month</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <ul className="space-y-4 mb-6">
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Up to 2,000 students
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Advanced analytics
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Priority support
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                API access
              </li>
            </ul>
          </CardContent>
          <CardFooter className="p-6">
            <Button className="w-full" asChild>
              <Link href="/demo">Get Started</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="relative group hover:shadow-lg transition-all">
          <CardHeader className="p-6">
            <CardTitle>
              <div className="text-lg font-medium mb-2">Enterprise</div>
              <div className="text-3xl font-bold">Custom</div>
              <div className="text-sm text-gray-600">contact for pricing</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <ul className="space-y-4 mb-6">
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Unlimited students
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Custom integrations
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                24/7 dedicated support
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                On-premise deployment
              </li>
            </ul>
          </CardContent>
          <CardFooter className="p-6">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-4">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </div>
  )
}

