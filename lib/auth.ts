import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from "next-auth"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials): Promise<User | null> {
        // This is where you would typically query your database
        // to find and validate the user
        if (credentials?.email === "faculty@example.com" && credentials?.password === "password") {
          return { id: "1", name: "Faculty User", email: "faculty@example.com", role: "faculty" }
        } else if (credentials?.email === "ta@example.com" && credentials?.password === "password") {
          return { id: "2", name: "TA User", email: "ta@example.com", role: "ta" }
        } else if (credentials?.email === "student@example.com" && credentials?.password === "password") {
          return { id: "3", name: "Student User", email: "student@example.com", role: "student" }
        }
        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user: User | undefined }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.role = token.role as string
      }
      return session
    }
  },
  pages: {
    signIn: '/auth/login',
  },
}

