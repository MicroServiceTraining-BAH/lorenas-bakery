import { NextRequest, NextResponse } from 'next/server';

import { requireAuth } from '@/lib/api-auth';
import { readData, writeData } from '@/lib/data';
import type { BusinessData } from '@/types/cms';

export async function GET(req: NextRequest) {
  const auth = requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  return NextResponse.json(readData<BusinessData>('business.json'));
}

export async function PUT(req: NextRequest) {
  const auth = requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  const body = (await req.json()) as Partial<BusinessData>;
  const current = readData<BusinessData>('business.json');
  const updated: BusinessData = {
    ...current,
    ...body,
    hours: { ...current.hours, ...(body.hours ?? {}) },
  };
  writeData('business.json', updated);
  return NextResponse.json({ success: true, data: updated });
}
