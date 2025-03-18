// components/dashboard/FacultyDashboard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Users, Clock, Calendar, BarChart, Plus } from "lucide-react";
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

export default function FacultyDashboard({ session }: { session: Session }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Welcome, {session.user.name}</h1>
          <p className="text-muted-foreground">
            Here's an overview of your teaching activity
          </p>
        </div>
        <Button asChild>
          <Link href="/faculty/courses/new">
            <Plus className="mr-2 h-4 w-4" /> Create New Course
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Active Courses"
          value="5"
          description="Currently active courses"
          icon={<BookOpen className="h-4 w-4 text-muted-foreground" />}
        />
        <DashboardCard
          title="Total Students"
          value="243"
          description="Across all courses"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        />
        <DashboardCard
          title="Pending Grades"
          value="18"
          description="Assignments to grade"
          icon={<Clock className="h-4 w-4 text-muted-foreground" />}
        />
        <DashboardCard
          title="Office Hours"
          value="8"
          description="Scheduled this week"
          icon={<Calendar className="h-4 w-4 text-muted-foreground" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>{/* Add recent activity list here */}</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full" asChild>
              <Link href="/faculty/courses">View All Courses</Link>
            </Button>
            <Button className="w-full" variant="outline" asChild>
              <Link href="/faculty/grades">Grade Assignments</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
