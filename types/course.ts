export interface Course {
    id: string;
    code: string;
    name: string;
    description: string;
    semester: string;
    enrolledStudents: number;
    assignedTAs: number;
    status: 'active' | 'archived' | 'draft';
  }