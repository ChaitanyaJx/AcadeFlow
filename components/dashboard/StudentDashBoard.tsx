// components/dashboard/StudentDashboard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Calendar, AlertCircle, BarChart } from "lucide-react";
import type { Session } from "@/types/auth";

interface DashboardCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
}

function DashboardCard({
  title,
  value,
  description,
  icon,
}: DashboardCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function StudentDashboard({ session }: { session: Session }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Welcome, {session.user.name}</h1>
        <p className="text-muted-foreground">Track your academic progress</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Enrolled Courses"
          value="4"
          description="Current semester"
          icon={<BookOpen className="h-4 w-4 text-muted-foreground" />}
        />
        <DashboardCard
          title="Upcoming Due"
          value="3"
          description="Assignments due soon"
          icon={<Calendar className="h-4 w-4 text-muted-foreground" />}
        />
        <DashboardCard
          title="New Grades"
          value="2"
          description="Recently graded"
          icon={<AlertCircle className="h-4 w-4 text-muted-foreground" />}
        />
        <DashboardCard
          title="Overall GPA"
          value="3.8"
          description="Current standing"
          icon={<BarChart className="h-4 w-4 text-muted-foreground" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Assignments</CardTitle>
          </CardHeader>
          <CardContent>{/* Add upcoming assignments list here */}</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Grades</CardTitle>
          </CardHeader>
          <CardContent>{/* Add recent grades list here */}</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full" asChild>
              <Link href="/student/assignments">View All Assignments</Link>
            </Button>
            <Button className="w-full" variant="outline" asChild>
              <Link href="/student/grades">Check Grades</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
