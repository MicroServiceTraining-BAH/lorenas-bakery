import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

import { requireAuth } from '@/lib/api-auth';
import { readData, writeData } from '@/lib/data';
import type { MenuData } from '@/types/cms';

export async function GET(req: NextRequest) {
  const auth = requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  const data = readData<MenuData>('menu.json');
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const auth = requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  const body = (await req.json()) as { name: string };
  const { name } = body;

  if (!name?.trim()) {
    return NextResponse.json({ error: 'Category name is required.' }, { status: 400 });
  }

  const data = readData<MenuData>('menu.json');
  const id = name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .concat('-', crypto.randomUUID().slice(0, 6));

  data.categories.push({ id, name: name.trim(), items: [] });
  writeData('menu.json', data);
  return NextResponse.json({ success: true, data });
}
