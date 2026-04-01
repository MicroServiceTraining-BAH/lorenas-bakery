/**
 * Auth helpers for API route handlers.
 * Middleware only guards browser navigation; API routes must call these directly.
 */
import { NextRequest, NextResponse } from 'next/server';

import { getSession, getUserById } from './auth';
import type { User } from '@/types/cms';

export async function getAuthUser(req: NextRequest): Promise<User | null> {
  const token = req.cookies.get('cms-session')?.value;
  if (!token) return null;
  const session = await getSession(token);
  if (!session) return null;
  return getUserById(session.userId);
}

/** Returns { user } or a 401 NextResponse. Use with early return. */
export async function requireAuth(req: NextRequest): Promise<{ user: User } | NextResponse> {
  const user = await getAuthUser(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized. Please sign in.' }, { status: 401 });
  }
  return { user };
}

/** Returns { user } or a 403 NextResponse. Use with early return. */
export async function requireAdmin(req: NextRequest): Promise<{ user: User } | NextResponse> {
  const result = await requireAuth(req);
  if (result instanceof NextResponse) return result;
  if (result.user.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden. Admin access required.' }, { status: 403 });
  }
  return result;
}
