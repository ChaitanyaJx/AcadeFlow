import { getCourseById } from "@/app/api/faculty/course";
import CourseForm from "@/components/courses/CourseForm";
import { notFound } from "next/navigation";

export default async function EditCoursePage({
  params,
}: {
  params: { courseId: string };
}) {
  const course = await getCourseById(params.courseId);

  if (!course) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Edit Course</h1>
      <CourseForm course={course} />
    </div>
  );
}
