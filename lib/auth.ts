import crypto from 'crypto';

export const COOKIE_NAME = 'unending_story_vault';
const SECRET = process.env.AUTH_SECRET || 'unending-story-samarth-riddhi-capermint-2026-secret-key-salt';

// The only valid password (strictly case-sensitive: "Spidyy")
const REQUIRED_PASSWORD = process.env.STORY_PASSWORD || 'Spidyy';

export function verifyPassword(input: string): boolean {
  if (!input) return false;
  // Strict case-sensitive match. Only exact 'Spidyy' is valid.
  return input === REQUIRED_PASSWORD;
}

export function createAuthToken(): string {
  const timestamp = Date.now().toString();
  const payload = `story_verified_${timestamp}`;
  const signature = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
  return `${payload}.${signature}`;
}

export function verifyAuthToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [payload, signature] = parts;
  const expected = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
  return signature === expected;
}
