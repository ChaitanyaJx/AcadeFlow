import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { 
  Pencil, 
  Trash2, 
  Users, 
  BookOpen,
  MoreHorizontal 
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getCourses } from "@/app/api/faculty/course"
import { Course } from "@/types/course"

// Status badge component
function StatusBadge({ status }: { status: Course['status'] }) {
  const statusStyles = {
    active: 'bg-green-100 text-green-800',
    archived: 'bg-gray-100 text-gray-800',
    draft: 'bg-yellow-100 text-yellow-800'
  }

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

// Course actions component
function CourseActions({ course }: { course: Course }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={`/faculty/courses/${course.id}`} className="flex items-center">
            <BookOpen className="mr-2 h-4 w-4" />
            View Details
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/faculty/courses/${course.id}/students`} className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            Manage Students
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/faculty/courses/${course.id}/edit`} className="flex items-center">
            <Pencil className="mr-2 h-4 w-4" />
            Edit Course
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-600 flex items-center">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete Course
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default async function FacultyCoursesPage() {
  const courses = await getCourses()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Course Management</h1>
        <Button asChild>
          <Link href="/faculty/courses/new">
            Add New Course
          </Link>
        </Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course Code</TableHead>
              <TableHead>Course Name</TableHead>
              <TableHead>Semester</TableHead>
              <TableHead className="text-center">Students</TableHead>
              <TableHead className="text-center">TAs</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">{course.code}</TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.semester}</TableCell>
                <TableCell className="text-center">{course.enrolledStudents}</TableCell>
                <TableCell className="text-center">{course.assignedTAs}</TableCell>
                <TableCell>
                  <StatusBadge status={course.status} />
                </TableCell>
                <TableCell className="text-right">
                  <CourseActions course={course} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}