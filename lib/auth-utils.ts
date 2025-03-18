import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { Session } from "@/types/auth";

export async function getSession(): Promise<Session | null> {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("session");

    if (!sessionCookie?.value) {
      return null;
    }

    const session = JSON.parse(sessionCookie.value) as Session;

    // Validate session structure
    if (!session?.user?.role) {
      return null;
    }

    return session;
  } catch (error) {
    console.error("Error parsing session:", error);
    return null;
  }
}

export async function requireAuth() {
  const session = await getSession();

  if (!session) {
    redirect("/auth/login");
  }

  return session;
}

export async function login(email: string, _password: string) {
  try {
    // Mock login - replace with actual authentication logic
    const session: Session = {
      user: {
        id: "1",
        email,
        role: "faculty",
        name: "Test User",
      },
    };

    // Set the session cookie
    const cookieStore = await cookies();
    cookieStore.set("session", JSON.stringify(session), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return { success: true };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, error: "Failed to login" };
  }
}

export async function logout() {
  try {
    const res = await fetch("/api/auth/signout", {
      method: "POST",
    });

    if (!res.ok) {
      throw new Error("Failed to sign out");
    }

    // Note: This part should be handled in a client component
    // These DOM operations won't work in a server component
    document.cookie = "session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT";
    window.location.href = "/";
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
}
