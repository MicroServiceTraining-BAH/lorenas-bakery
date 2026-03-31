import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

import { requireAuth } from '@/lib/api-auth';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
const MAX_SIZE_BYTES = 5 * 1024 * 1024;

export async function POST(req: NextRequest) {
  const auth = requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  try {
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided.' }, { status: 400 });
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Use JPG, PNG, WebP, or GIF.' },
        { status: 400 }
      );
    }
    if (file.size > MAX_SIZE_BYTES) {
      return NextResponse.json({ error: 'File too large. Maximum size is 5 MB.' }, { status: 400 });
    }

    // Generate a safe filename — never use the original name
    const ext = path.extname(file.name).toLowerCase() || '.jpg';
    const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;

    // Prevent path traversal by resolving and verifying the final path
    const filePath = path.resolve(UPLOAD_DIR, safeName);
    if (!filePath.startsWith(path.resolve(UPLOAD_DIR))) {
      return NextResponse.json({ error: 'Invalid file path.' }, { status: 400 });
    }

    fs.writeFileSync(filePath, Buffer.from(await file.arrayBuffer()));
    return NextResponse.json({ success: true, url: `/uploads/${safeName}` });
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json({ error: 'Upload failed. Please try again.' }, { status: 500 });
  }
}
