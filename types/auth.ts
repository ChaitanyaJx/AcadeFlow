// types/auth.ts
export interface User {
  id: string;
  email: string;
  role: "faculty" | "ta" | "student";
  name?: string;
}

export interface Session {
  user: User;
}
