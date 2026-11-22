import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { verifyAuthToken, COOKIE_NAME } from '@/lib/auth';

// Mapping photo IDs to their private file names
const PHOTO_MAP: Record<string, string> = {
  diwali_portrait: 'diwali_portrait.png',
  diwali_candid: 'diwali_candid.png',
  diwali_playful: 'diwali_playful.png',
  riddhi_diya: 'riddhi_diya.png',
  riddhi_childhood: 'riddhi_childhood.png',
};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // 1. Verify Authentication Cookie
  const cookie = req.cookies.get(COOKIE_NAME);
  const isAuthenticated = verifyAuthToken(cookie?.value);

  if (!isAuthenticated) {
    return NextResponse.json(
      {
        error: 'Unauthorized. The private memory vault is locked.',
        message: 'Enter the friendship passcode at the entrance to access these private memories.',
      },
      { status: 401 }
    );
  }

  // 2. Validate requested Photo ID
  const { id } = await params;
  const fileName = PHOTO_MAP[id];

  if (!fileName) {
    return NextResponse.json(
      { error: 'Photo not found in the private memory vault.' },
      { status: 404 }
    );
  }

  // 3. Resolve path to secure private storage outside public web directory
  const filePath = path.join(process.cwd(), 'private_assets', 'photos', fileName);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json(
      { error: 'Photo file is not accessible on the server.' },
      { status: 404 }
    );
  }

  try {
    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'private, max-age=86400, stale-while-revalidate=604800',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to read photo from memory vault.' },
      { status: 500 }
    );
  }
}
