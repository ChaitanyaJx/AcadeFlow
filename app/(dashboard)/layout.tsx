// app/(dashboard)/layout.tsx
import { getSession } from "@/lib/auth-utils";
import { redirect } from "next/navigation";
import DashboardNavBar from "@/components/DashboardNavBar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardNavBar session={session} />
      <main className="pt-16">{children}</main>
    </div>
  );
}
