export default function AssignmentDetailsPage({ params }: { params: { courseId: string, assignmentId: string } }) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Assignment Details: {params.assignmentId}</h1>
        <p>Assignment details for course {params.courseId} will be displayed here.</p>
      </div>
    )
  }
  
  