import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

import { requireAuth } from '@/lib/api-auth';
import { readData, writeData } from '@/lib/data';
import type { GalleryData, GalleryImage } from '@/types/cms';

export async function GET(req: NextRequest) {
  const auth = await requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  return NextResponse.json(await readData<GalleryData>('gallery'));
}

export async function POST(req: NextRequest) {
  const auth = await requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  const body = (await req.json()) as Omit<GalleryImage, 'id'>;
  if (!body.src) {
    return NextResponse.json({ error: 'Image URL is required.' }, { status: 400 });
  }

  const data = await readData<GalleryData>('gallery');
  data.images.push({ ...body, id: crypto.randomUUID() });
  await writeData('gallery', data);
  return NextResponse.json({ success: true, data });
}
