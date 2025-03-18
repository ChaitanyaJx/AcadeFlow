// auth-client-utils.ts - Client Component
"use client";

export async function clientLogout() {
  try {
    const res = await fetch("/api/auth/signout", {
      method: "POST",
    });

    if (!res.ok) {
      throw new Error("Failed to sign out");
    }

    // Clear cookies and redirect
    document.cookie = "session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT";
    window.location.href = "/";
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
}
