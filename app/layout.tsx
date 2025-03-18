import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { getSession } from "@/lib/auth-utils";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AcadeFlow - Academic Grading Platform",
  description: "Streamline your academic grading workflow",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <NavBar session={session} /> {/* Changed from user to session */}
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
