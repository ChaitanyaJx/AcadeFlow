// app/faculty/courses/[courseId]/page.tsx

import { Suspense } from 'react';
import * as React from 'react'
import { notFound } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { getCourseById } from '@/app/api/faculty/course';
import Link from 'next/link';
import { ChevronLeft, Users, FileText, Settings } from 'lucide-react';

// Loading component
export function CourseDetailsSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <Skeleton className="h-32" />
        <Skeleton className="h-32" />
        <Skeleton className="h-32" />
      </div>
    </div>
  );
}

// Navigation card component
function NavCard({ 
  icon: Icon, 
  title, 
  description, 
  href 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  href: string 
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <Link href={href}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon className="h-5 w-5" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
      </Link>
    </Card>
  );
}

// Course details content component
function CourseContent({ courseId, course }: { courseId: string, course: NonNullable<Awaited<ReturnType<typeof getCourseById>>> }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <Link href="/faculty/courses" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to Courses
          </Link>
        </Button>
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">{course.code}: {course.name}</h1>
          <p className="text-gray-600">Semester: {course.semester}</p>
        </div>
        <Button asChild>
          <Link href={`/faculty/courses/${courseId}/edit`}>
            Edit Course
          </Link>
        </Button>
      </div>
      
      <p className="text-gray-600">{course.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <NavCard
          icon={Users}
          title="Students"
          description={`Manage ${course.enrolledStudents} enrolled students`}
          href={`/faculty/courses/${courseId}/students`}
        />
        <NavCard
          icon={FileText}
          title="Assignments"
          description="Create and manage course assignments"
          href={`/faculty/courses/${courseId}/assignments`}
        />
        <NavCard
          icon={Settings}
          title="Settings"
          description="Configure course settings and permissions"
          href={`/faculty/courses/${courseId}/settings`}
        />
      </div>
    </div>
  );
}

// Main page component
export default async function CourseDetailsPage({ 
  params 
}: { 
  params: { courseId: string } 
}) {
  const course = React.use(getCourseById(params.courseId));

  if (!course) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<CourseDetailsSkeleton />}>
        <CourseContent courseId={params.courseId} course={course} />
      </Suspense>
    </div>
  );
}