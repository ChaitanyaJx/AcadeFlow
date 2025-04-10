"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

export default function AuthError() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const errorMessage = searchParams.get("error")

  useEffect(() => {
    if (errorMessage) {
      // Log the error to an error reporting service
      console.error("Authentication error:", errorMessage)
    }
  }, [errorMessage])

  const getErrorMessage = (error: string) => {
    switch (error) {
      case "CredentialsSignin":
        return "Invalid email or password. Please try again."
      case "AccessDenied":
        return "You don't have permission to access this resource."
      case "Configuration":
        return "There is a problem with the server configuration."
      case "TokenExpired":
        return "Your session has expired. Please sign in again."
      default:
        return "An unexpected error occurred. Please try again later."
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md scale-125">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <AlertCircle className="h-12 w-12 text-red-600" />
          </div>
          <CardTitle className="text-2xl text-center">Authentication Error</CardTitle>
          <CardDescription className="text-center text-red-600">
            {errorMessage ? getErrorMessage(errorMessage) : "An error occurred during authentication"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {errorMessage && (
            <p className="text-center text-sm text-gray-600 mb-4">
              Error Type: {errorMessage}
            </p>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="flex space-x-4 w-full">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => router.push('/auth/login')}
            >
              Back to Login
            </Button>
            <Button 
              className="flex-1"
              onClick={() => router.push('/auth/login')}
            >
              Try Again
            </Button>
          </div>
          <div className="text-sm text-center text-gray-500">
            If this problem persists, please contact support
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}