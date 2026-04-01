import { NextRequest, NextResponse } from 'next/server';

import { requireAuth } from '@/lib/api-auth';
import { readData, writeData } from '@/lib/data';
import type { GalleryData, GalleryImage } from '@/types/cms';

type Params = { params: { id: string } };

export async function PUT(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  const body = (await req.json()) as Partial<GalleryImage>;
  const data = await readData<GalleryData>('gallery');
  const index = data.images.findIndex((i) => i.id === params.id);
  if (index === -1) return NextResponse.json({ error: 'Image not found.' }, { status: 404 });
  data.images[index] = { ...data.images[index], ...body };
  await writeData('gallery', data);
  return NextResponse.json({ success: true, data });
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  const data = await readData<GalleryData>('gallery');
  data.images = data.images.filter((i) => i.id !== params.id);
  await writeData('gallery', data);
  return NextResponse.json({ success: true });
}
