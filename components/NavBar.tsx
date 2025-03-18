import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import type { Session } from "@/types/auth"; // You'll need to create this type

interface NavBarProps {
  session: Session | null;
}

export default function NavBar({ session }: NavBarProps) {
  return (
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
            <Link
              href="/features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="/solutions"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
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
                <Link
                  href={`/${session.user.role}/courses`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
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
  );
}
