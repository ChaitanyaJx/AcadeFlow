import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, FileText } from "lucide-react";
import { getSession } from "@/lib/auth-utils";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();

  // If authenticated, redirect based on role
  if (session?.user) {
    const roleRoutes = {
      faculty: "/faculty/courses",
      ta: "/ta/courses",
      student: "/student/courses",
    } as const;

    const userRole = session.user.role as keyof typeof roleRoutes;
    if (userRole in roleRoutes) {
      return redirect(roleRoutes[userRole]);
    }
  }

  // Marketing page for unauthenticated users
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden bg-dot-pattern">
      {/* Floating Elements */}
      <div className="absolute left-10 top-20 w-48 h-48 animate-float-slow">
        <div className="relative bg-yellow-100 rounded-lg p-6 shadow-lg transform -rotate-6">
          <div className="space-y-2">
            <div className="w-full h-3 bg-yellow-200 rounded"></div>
            <div className="w-3/4 h-3 bg-yellow-200 rounded"></div>
            <div className="w-1/2 h-3 bg-yellow-200 rounded"></div>
          </div>
          <div className="absolute -bottom-2 -left-2 bg-background rounded-lg shadow-lg p-2">
            <CheckCircle className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>

      <div className="absolute right-10 top-40 w-48 animate-float">
        <div className="bg-background rounded-lg p-4 shadow-lg">
          <div className="flex items-center space-x-3 mb-2">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Today's Grades</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-muted rounded"></div>
            <div className="h-2 bg-muted rounded w-3/4"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Grade, manage, and track
          <span className="block text-muted-foreground mt-2">
            all in one place
          </span>
        </h1>
        <p className="mx-auto max-w-[600px] text-muted-foreground mb-8">
          Efficiently manage your academic grading workflow and boost
          productivity with AcadeFlow.
        </p>
        <Button size="lg" asChild>
          <Link href="/demo">Get free demo</Link>
        </Button>
      </div>

      {/* Bottom Floating Elements */}
      <div className="absolute left-20 bottom-20 w-64 animate-float-slow">
        <div className="bg-background rounded-lg shadow-lg p-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-600 rounded"></div>
              <div className="h-2 bg-muted rounded flex-1"></div>
              <div className="text-xs text-muted-foreground">95%</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-600 rounded"></div>
              <div className="h-2 bg-muted rounded flex-1"></div>
              <div className="text-xs text-muted-foreground">87%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-20 bottom-20 w-64 animate-float">
        <div className="bg-background rounded-lg shadow-lg p-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="flex items-center justify-center bg-muted rounded-lg p-2">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex items-center justify-center bg-muted rounded-lg p-2">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex items-center justify-center bg-muted rounded-lg p-2">
              <CheckCircle className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
