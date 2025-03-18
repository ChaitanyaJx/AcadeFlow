// app/api/auth/signout/route.ts
import { logout } from '@/lib/auth-utils';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    await logout();
    
    // Clear the session cookie
    const cookieStore = await cookies();
    cookieStore.delete('session'); // Replace 'session' with your actual cookie name
    
    return NextResponse.json(
      { success: true },
      {
        status: 200,
        headers: {
          // Ensure cookie is cleared in browser
          'Set-Cookie': `session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure; SameSite=Lax`
        }
      }
    );
  } catch (error) {
    console.error('Sign out error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to sign out'
      },
      { status: 500 }
    );
  }
}

// Handle GET requests to prevent the "page isn't working" error
export async function GET() {
  // Redirect GET requests to home
  return NextResponse.redirect(new URL('/', process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'));
}