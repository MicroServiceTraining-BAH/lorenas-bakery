import { NextRequest, NextResponse } from 'next/server';

import { requireAuth } from '@/lib/api-auth';
import { readData, writeData } from '@/lib/data';
import type { HomeData } from '@/types/cms';

export async function GET(req: NextRequest) {
  const auth = requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  return NextResponse.json(readData<HomeData>('home.json'));
}

export async function PUT(req: NextRequest) {
  const auth = requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  const body = (await req.json()) as Partial<HomeData>;
  const current = readData<HomeData>('home.json');
  writeData('home.json', { ...current, ...body });
  return NextResponse.json({ success: true, data: { ...current, ...body } });
}
