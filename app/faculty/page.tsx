import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FacultyCoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Course Management</h1>
      <Button asChild>
        <Link href="/faculty/courses/new">Add New Course</Link>
      </Button>
      <div className="mt-4">
        <p>List of courses will be displayed here.</p>
      </div>
    </div>
  )
}