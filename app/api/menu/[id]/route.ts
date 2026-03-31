import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

import { requireAuth } from '@/lib/api-auth';
import { readData, writeData } from '@/lib/data';
import type { MenuData, MenuItem } from '@/types/cms';

type Params = { params: { id: string } };

export async function PUT(req: NextRequest, { params }: Params) {
  const auth = requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  const body = (await req.json()) as
    | { type: 'category'; name: string }
    | { type: 'item'; item: MenuItem };

  const data = readData<MenuData>('menu.json');
  const catIndex = data.categories.findIndex((c) => c.id === params.id);
  if (catIndex === -1) {
    return NextResponse.json({ error: 'Category not found.' }, { status: 404 });
  }

  if (body.type === 'category') {
    data.categories[catIndex].name = body.name.trim();
  } else if (body.type === 'item') {
    const item = { ...body.item };
    if (!item.id) item.id = crypto.randomUUID();
    const itemIndex = data.categories[catIndex].items.findIndex((i) => i.id === item.id);
    if (itemIndex === -1) {
      data.categories[catIndex].items.push(item);
    } else {
      data.categories[catIndex].items[itemIndex] = item;
    }
  }

  writeData('menu.json', data);
  return NextResponse.json({ success: true, data });
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const auth = requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  const body = (await req.json()) as { type: 'category' } | { type: 'item'; itemId: string };

  const data = readData<MenuData>('menu.json');
  const catIndex = data.categories.findIndex((c) => c.id === params.id);
  if (catIndex === -1) {
    return NextResponse.json({ error: 'Category not found.' }, { status: 404 });
  }

  if (body.type === 'category') {
    data.categories.splice(catIndex, 1);
  } else if (body.type === 'item') {
    data.categories[catIndex].items = data.categories[catIndex].items.filter(
      (i) => i.id !== body.itemId
    );
  }

  writeData('menu.json', data);
  return NextResponse.json({ success: true, data });
}
