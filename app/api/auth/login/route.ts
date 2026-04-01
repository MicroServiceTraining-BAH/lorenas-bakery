import { NextRequest, NextResponse } from 'next/server';

import { createSession, ensureAdminExists, getUserByUsername, verifyPassword } from '@/lib/auth';

// ─── Simple in-memory rate limiter ───────────────────────────────────────────
// Resets on server restart. Good enough for a local CMS.
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000; // 15 minutes

type RateEntry = { count: number; lockedUntil: number };
const loginAttempts = new Map<string, RateEntry>();

function getIp(req: NextRequest): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'local';
}

function isRateLimited(ip: string): boolean {
  const entry = loginAttempts.get(ip);
  if (!entry) return false;
  if (entry.lockedUntil > Date.now()) return true;
  // Lockout expired — reset
  if (entry.count >= MAX_ATTEMPTS) {
    loginAttempts.delete(ip);
  }
  return false;
}

function recordFailure(ip: string): void {
  const entry = loginAttempts.get(ip) ?? { count: 0, lockedUntil: 0 };
  entry.count += 1;
  if (entry.count >= MAX_ATTEMPTS) {
    entry.lockedUntil = Date.now() + LOCKOUT_MS;
  }
  loginAttempts.set(ip, entry);
}

function clearAttempts(ip: string): void {
  loginAttempts.delete(ip);
}

// ─── Route handler ────────────────────────────────────────────────────────────

function setSessionCookie(response: NextResponse, token: string): void {
  response.cookies.set('cms-session', token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
    // secure in production so the cookie is only sent over HTTPS
    secure: process.env.NODE_ENV === 'production',
  });
}

export async function POST(req: NextRequest) {
  const ip = getIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many failed attempts. Try again in 15 minutes.' },
      { status: 429 }
    );
  }

  try {
    const body = (await req.json()) as { username?: string; password?: string };
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required.' }, { status: 400 });
    }

    // Seed first admin from env vars if no users exist yet
    await ensureAdminExists();

    const user = await getUserByUsername(username);
    if (!user || !verifyPassword(password, user.salt, user.passwordHash)) {
      recordFailure(ip);
      // Same message for both cases — don't leak whether username exists
      return NextResponse.json({ error: 'Invalid username or password.' }, { status: 401 });
    }

    const token = await createSession(user.id);
    const response = NextResponse.json({
      success: true,
      user: { id: user.id, username: user.username, role: user.role, name: user.name },
    });
    setSessionCookie(response, token);
    clearAttempts(ip);
    return response;
  } catch {
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
