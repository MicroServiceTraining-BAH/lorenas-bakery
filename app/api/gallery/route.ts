import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

import { readData, writeData } from '@/lib/data';
import type { GalleryData, GalleryImage } from '@/types/cms';

export async function GET() {
  const data = readData<GalleryData>('gallery.json');
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Omit<GalleryImage, 'id'>;

  if (!body.src) {
    return NextResponse.json({ error: 'Image URL is required.' }, { status: 400 });
  }

  const data = readData<GalleryData>('gallery.json');
  const image: GalleryImage = { ...body, id: crypto.randomUUID() };
  data.images.push(image);
  writeData('gallery.json', data);
  return NextResponse.json({ success: true, data });
}
