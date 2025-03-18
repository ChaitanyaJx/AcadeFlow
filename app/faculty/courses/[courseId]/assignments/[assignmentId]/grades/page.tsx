export default function GradesOverviewPage({ params }: { params: { courseId: string, assignmentId: string } }) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Grades Overview: Assignment {params.assignmentId}</h1>
        <p>Grades overview for course {params.courseId} will be displayed here.</p>
      </div>
    )
  }
  
  