// components/dashboard/TADashboard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ClipboardList, Users, Clock, MessageSquare } from "lucide-react";
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

export default function TADashboard({ session }: { session: Session }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">
          Welcome back, {session.user.name}
        </h1>
        <p className="text-muted-foreground">
          Here's your TA dashboard overview
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Assigned Courses"
          value="3"
          description="Courses you're assisting"
          icon={<ClipboardList className="h-4 w-4 text-muted-foreground" />}
        />
        <DashboardCard
          title="Students"
          value="156"
          description="Total students"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        />
        <DashboardCard
          title="Pending Grades"
          value="27"
          description="Need grading"
          icon={<Clock className="h-4 w-4 text-muted-foreground" />}
        />
        <DashboardCard
          title="Student Queries"
          value="5"
          description="Unresolved questions"
          icon={<MessageSquare className="h-4 w-4 text-muted-foreground" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>{/* Add deadlines list here */}</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full" asChild>
              <Link href="/ta/grading">Start Grading</Link>
            </Button>
            <Button className="w-full" variant="outline" asChild>
              <Link href="/ta/office-hours">View Office Hours</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
