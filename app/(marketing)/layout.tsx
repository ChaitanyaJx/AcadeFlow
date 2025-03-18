import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap } from 'lucide-react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import type { Session } from 'next-auth'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'AcadeFlow - Collaborative Grading Platform',
  description: 'Streamline academic grading workflow for universities with role-based access for faculty, teaching assistants, and students.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions) as Session | null

  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <Link href="/" className="flex items-center space-x-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <span className="text-xl font-semibold">AcadeFlow</span>
                  </Link>
                </div>
                
                <nav className="hidden md:flex items-center space-x-6">
                  <Link href="/features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </Link>
                  <Link href="/solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Solutions
                  </Link>
                  <Link href="/resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Resources
                  </Link>
                  <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </nav>

                <div className="flex items-center space-x-4">
                  {!session ? (
                    <>
                      <Button variant="ghost" className="text-sm" asChild>
                        <Link href="/auth/login">Sign in</Link>
                      </Button>
                      <Button className="text-sm" asChild>
                        <Link href="/auth/register">Sign up</Link>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Dashboard
                      </Link>
                      <Button variant="ghost" className="text-sm" asChild>
                        <Link href="/api/auth/signout">Sign out</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="border-t bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold">AcadeFlow</span>
                </div>
                <nav className="flex items-center space-x-6 my-4 md:my-0">
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </nav>
                <p className="text-sm text-muted-foreground">
                  © 2024 AcadeFlow. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

