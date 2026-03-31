import { NextRequest, NextResponse } from 'next/server';

import { readData, writeData } from '@/lib/data';
import type { HomeData } from '@/types/cms';

export async function GET() {
  const data = readData<HomeData>('home.json');
  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
  const body = (await req.json()) as Partial<HomeData>;
  const current = readData<HomeData>('home.json');
  const updated = { ...current, ...body };
  writeData('home.json', updated);
  return NextResponse.json({ success: true, data: updated });
}
