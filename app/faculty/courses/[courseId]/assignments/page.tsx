export default function AssignmentsManagementPage({ params }: { params: { courseId: string } }) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Assignments Management: Course {params.courseId}</h1>
        <p>List of assignments will be displayed here.</p>
      </div>
    )
  }
  
  