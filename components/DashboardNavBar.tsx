import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { useRouter } from "next/navigation";
import type { Session } from "@/types/auth";

export default function DashboardNavBar({ session }: { session: Session }) {
  const router = useRouter();
  const baseRoute = `/${session.user.role}`;

  const handleSignOut = async () => {
    try {
      console.log('Signing out...');
      const res = await fetch("/api/auth/signout", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.ok && data.success) {
        console.log('Sign out successful');
        // Use replace to prevent back navigation
        router.replace("/");
      } else {
        throw new Error(data.error || 'Failed to sign out');
      }
    } catch (error) {
      console.error("Failed to sign out:", error);
      // Redirect to home even on error
      router.replace("/");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href={`${baseRoute}/dashboard`}
            className="flex items-center space-x-2"
          >
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">AcadeFlow</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              {session.user.name}
            </span>
            <Button 
              variant="ghost"
              onClick={handleSignOut}
              type="button"
            >
              Sign out
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}