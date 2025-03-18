export default function StudentRosterPage({ params }: { params: { courseId: string } }) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Student Roster: Course {params.courseId}</h1>
        <p>Student roster will be displayed here.</p>
      </div>
    )
  }
  
  