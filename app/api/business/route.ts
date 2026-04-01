import { NextRequest, NextResponse } from 'next/server';

import { requireAuth } from '@/lib/api-auth';
import { readData, writeData } from '@/lib/data';
import type { BusinessData } from '@/types/cms';

export async function GET(req: NextRequest) {
  const auth = await requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  return NextResponse.json(await readData<BusinessData>('business'));
}

export async function PUT(req: NextRequest) {
  const auth = await requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  const body = (await req.json()) as Partial<BusinessData>;
  const current = await readData<BusinessData>('business');
  const updated: BusinessData = {
    ...current,
    ...body,
    hours: { ...current.hours, ...(body.hours ?? {}) },
  };
  await writeData('business', updated);
  return NextResponse.json({ success: true, data: updated });
}
