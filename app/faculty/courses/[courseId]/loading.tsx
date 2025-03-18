// app/faculty/courses/[courseId]/loading.tsx

import { CourseDetailsSkeleton } from './page';

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CourseDetailsSkeleton />
    </div>
  );
}