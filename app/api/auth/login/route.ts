import { NextRequest, NextResponse } from 'next/server';

import { createSession, createUser, getUserByUsername, getUsers, verifyPassword } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { username?: string; password?: string; name?: string; setup?: boolean };
    const { username, password, name, setup } = body;

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required.' }, { status: 400 });
    }

    // First-run setup: create the initial admin account
    if (setup) {
      const existing = getUsers();
      if (existing.length > 0) {
        return NextResponse.json({ error: 'Setup already complete.' }, { status: 409 });
      }
      const user = createUser(username, password, 'admin', name ?? username);
      const token = createSession(user.id);
      const response = NextResponse.json({
        success: true,
        user: { id: user.id, username: user.username, role: user.role, name: user.name },
      });
      response.cookies.set('cms-session', token, {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      });
      return response;
    }

    // Normal login
    const user = getUserByUsername(username);
    if (!user || !verifyPassword(password, user.salt, user.passwordHash)) {
      return NextResponse.json({ error: 'Invalid username or password.' }, { status: 401 });
    }

    const token = createSession(user.id);
    const response = NextResponse.json({
      success: true,
      user: { id: user.id, username: user.username, role: user.role, name: user.name },
    });
    response.cookies.set('cms-session', token, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  } catch {
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
