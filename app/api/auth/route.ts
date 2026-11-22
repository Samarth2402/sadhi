import { NextRequest, NextResponse } from 'next/server';
import { verifyPassword, createAuthToken, COOKIE_NAME } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { password } = body;

    // Strict server-side verification: only exact 'Spidyy' matches
    if (!verifyPassword(password)) {
      return NextResponse.json(
        { success: false, error: 'Incorrect password. Please try again.' },
        { status: 401 }
      );
    }

    const token = createAuthToken();
    const response = NextResponse.json({
      success: true,
      message: 'Memory Vault Unlocked.',
    });

    const host = req.headers.get('host') || '';
    const isLocalhost = host.includes('localhost') || host.includes('127.0.0.1');

    response.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production' && !isLocalhost,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    return response;
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to process authentication request.' },
      { status: 500 }
    );
  }
}
