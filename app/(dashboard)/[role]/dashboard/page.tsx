// app/(dashboard)/[role]/dashboard/page.tsx
import { getSession } from "@/lib/auth-utils";
import { redirect } from "next/navigation";
import FacultyDashboard from "@/components/dashboard/FacultyDashboard";
// import TADashboard from "@/components/dashboard/TADashboard";
// import StudentDashboard from "@/components/dashboard/StudentDashboard";

export default async function DashboardPage({
  params,
}: {
  params: { role: string };
}) {
  const session = await getSession();

  if (!session) {
    redirect("/auth/login");
  }

  if (session.user.role !== params.role) {
    redirect(`/${session.user.role}/dashboard`);
  }

  const DashboardComponent = {
    faculty: FacultyDashboard,
    ta: TADashboard,
    student: StudentDashboard,
  }[params.role];

  return <DashboardComponent session={session} />;
}
