import { NextRequest, NextResponse } from 'next/server';

import { readData, writeData } from '@/lib/data';
import type { BusinessData } from '@/types/cms';

export async function GET() {
  const data = readData<BusinessData>('business.json');
  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
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
