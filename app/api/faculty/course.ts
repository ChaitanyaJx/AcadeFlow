// app/lib/api.ts

import { Course } from '@/types/course';

export async function getCourses(): Promise<Course[]> {
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return [
    {
      id: '1',
      code: 'CS101',
      name: 'Introduction to Computer Science',
      description: 'Fundamental concepts of programming and computer science',
      semester: 'Fall 2024',
      enrolledStudents: 150,
      assignedTAs: 5,
      status: 'active'
    },
    {
      id: '2',
      code: 'CS201',
      name: 'Data Structures',
      description: 'Advanced data structures and algorithms',
      semester: 'Fall 2024',
      enrolledStudents: 120,
      assignedTAs: 4,
      status: 'active'
    },
  ];
}

export async function getCourseById(id: string): Promise<Course | null> {
  const courses = await getCourses();
  return courses.find(course => course.id === id) || null;
}