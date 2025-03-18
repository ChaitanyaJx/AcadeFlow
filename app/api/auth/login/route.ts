import { login } from '@/lib/auth-utils'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { email, password } = body
  
  const result = await login(email, password)
  
  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 400 })
  }
  
  return NextResponse.json({ success: true })
}