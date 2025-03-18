"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

export default function AuthError() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  const getErrorMessage = () => {
    if (!error) return "An unexpected error occurred"
    
    switch (error) {
      case "CredentialsSignin":
        return "Invalid email or password. Please try again."
      case "OAuthSignin":
        return "Error occurred while signing in with OAuth provider."
      case "OAuthCallback":
        return "Error occurred while processing OAuth callback."
      case "OAuthCreateAccount":
        return "Error occurred while creating OAuth account."
      case "EmailCreateAccount":
        return "Error occurred while creating email account."
      case "Callback":
        return "Error occurred during callback processing."
      case "AccessDenied":
        return "Access denied. You don't have permission to access this resource."
      case "Verification":
        return "The verification token has expired or is invalid."
      default:
        return `Authentication error: ${error}`
    }
  }

  useEffect(() => {
    console.log("Current error:", error) // For debugging
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md scale-125">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <AlertCircle className="h-12 w-12 text-red-600" />
          </div>
          <CardTitle className="text-2xl text-center">Sign In Error</CardTitle>
          <CardDescription className="text-center text-red-600">
            {getErrorMessage()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center text-sm text-gray-600 mb-4">
            Please try signing in again or contact support if the problem persists.
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="flex space-x-4 w-full">
            <Button 
              className="flex-1"
              onClick={() => router.push('/auth/login')}
            >
              Back to Login
            </Button>
          </div>
          <div className="text-sm text-center text-gray-500">
            Need help? Contact support for assistance
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}