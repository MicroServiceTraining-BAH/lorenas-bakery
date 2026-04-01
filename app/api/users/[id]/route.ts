import { NextRequest, NextResponse } from 'next/server';

import { getSession, getUserById, getUsers, hashPassword } from '@/lib/auth';
import { readData, writeData } from '@/lib/data';
import type { User } from '@/types/cms';

type Params = { params: { id: string } };

async function getRequestingUser(req: NextRequest) {
  const token = req.cookies.get('cms-session')?.value;
  if (!token) return null;
  const session = await getSession(token);
  if (!session) return null;
  return await getUserById(session.userId);
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const requester = await getRequestingUser(req);
  if (!requester || requester.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden.' }, { status: 403 });
  }
  if (requester.id === params.id) {
    return NextResponse.json({ error: "You can't delete your own account." }, { status: 400 });
  }

  const users = await getUsers();
  const adminCount = users.filter((u) => u.role === 'admin').length;
  const target = users.find((u) => u.id === params.id);
  if (!target) {
    return NextResponse.json({ error: 'User not found.' }, { status: 404 });
  }
  if (target.role === 'admin' && adminCount <= 1) {
    return NextResponse.json({ error: 'Cannot delete the last admin account.' }, { status: 400 });
  }

  const data = await readData<{ users: User[] }>('users');
  data.users = data.users.filter((u) => u.id !== params.id);
  await writeData('users', data);
  return NextResponse.json({ success: true });
}

export async function PUT(req: NextRequest, { params }: Params) {
  const requester = await getRequestingUser(req);
  if (!requester || requester.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden.' }, { status: 403 });
  }

  const body = (await req.json()) as { password?: string };
  if (!body.password || body.password.length < 6) {
    return NextResponse.json(
      { error: 'Password must be at least 6 characters.' },
      { status: 400 }
    );
  }

  const data = await readData<{ users: User[] }>('users');
  const idx = data.users.findIndex((u) => u.id === params.id);
  if (idx === -1) return NextResponse.json({ error: 'User not found.' }, { status: 404 });

  data.users[idx].passwordHash = hashPassword(body.password, data.users[idx].salt);
  await writeData('users', data);
  return NextResponse.json({ success: true });
}
