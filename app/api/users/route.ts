import { NextRequest, NextResponse } from 'next/server';

import { createUser, getSession, getUserById, getUsers } from '@/lib/auth';
import type { Role } from '@/types/cms';

async function getRequestingUser(req: NextRequest) {
  const token = req.cookies.get('cms-session')?.value;
  if (!token) return null;
  const session = await getSession(token);
  if (!session) return null;
  return await getUserById(session.userId);
}

export async function GET(req: NextRequest) {
  const requester = await getRequestingUser(req);
  if (!requester || requester.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden.' }, { status: 403 });
  }
  const users = (await getUsers()).map(({ id, username, name, role }) => ({
    id,
    username,
    name,
    role,
  }));
  return NextResponse.json({ users });
}

export async function POST(req: NextRequest) {
  const requester = await getRequestingUser(req);
  if (!requester || requester.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden.' }, { status: 403 });
  }

  const body = (await req.json()) as {
    username?: string;
    name?: string;
    password?: string;
    role?: Role;
  };
  const { username, name, password, role } = body;

  if (!username?.trim() || !name?.trim() || !password || !role) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }
  if (!['admin', 'editor'].includes(role)) {
    return NextResponse.json({ error: 'Role must be admin or editor.' }, { status: 400 });
  }
  if (password.length < 6) {
    return NextResponse.json({ error: 'Password must be at least 6 characters.' }, { status: 400 });
  }

  const existing = await getUsers();
  if (existing.some((u) => u.username === username.trim())) {
    return NextResponse.json({ error: 'Username already taken.' }, { status: 409 });
  }

  const user = await createUser(username.trim(), password, role, name.trim());
  return NextResponse.json({
    success: true,
    user: { id: user.id, username: user.username, name: user.name, role: user.role },
  });
}
