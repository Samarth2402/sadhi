import { NextRequest, NextResponse } from 'next/server';
import { verifyAuthToken, COOKIE_NAME } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const cookie = req.cookies.get(COOKIE_NAME);
  const isAuthenticated = verifyAuthToken(cookie?.value);

  return NextResponse.json({ authenticated: isAuthenticated });
}
