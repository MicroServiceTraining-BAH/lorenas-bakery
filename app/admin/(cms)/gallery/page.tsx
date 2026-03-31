'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import type { GalleryData, GalleryImage } from '@/types/cms';

type UploadStatus = 'idle' | 'uploading' | 'error';

export default function GalleryPage() {
  const [data, setData] = useState<GalleryData>({ images: [] });
  const [loading, setLoading] = useState(true);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>('idle');
  const [uploadError, setUploadError] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editAlt, setEditAlt] = useState('');
  const [editCaption, setEditCaption] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch('/api/gallery')
      .then((r) => r.json())
      .then((d: GalleryData) => setData(d))
      .finally(() => setLoading(false));
  }, []);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadStatus('uploading');
    setUploadError('');
    try {
      const fd = new FormData();
      fd.append('file', file);
      const uploadRes = await fetch('/api/upload', { method: 'POST', body: fd });
      const uploadData = (await uploadRes.json()) as { url?: string; error?: string };
      if (!uploadRes.ok || !uploadData.url) throw new Error(uploadData.error ?? 'Upload failed.');

      const addRes = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ src: uploadData.url, alt: file.name, caption: '' }),
      });
      const addData = (await addRes.json()) as { data?: GalleryData; error?: string };
      if (!addRes.ok) throw new Error(addData.error ?? 'Could not save image.');

      if (addData.data) setData(addData.data);
      setUploadStatus('idle');
    } catch (err) {
      setUploadStatus('error');
      setUploadError(err instanceof Error ? err.message : 'Upload failed.');
    }
    if (fileRef.current) fileRef.current.value = '';
  }

  async function handleDelete(id: string) {
    setDeletingId(id);
    try {
      await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
      setData((prev) => ({ images: prev.images.filter((i) => i.id !== id) }));
    } finally {
      setDeletingId(null);
    }
  }

  function startEdit(img: GalleryImage) {
    setEditingId(img.id);
    setEditAlt(img.alt);
    setEditCaption(img.caption);
  }

  async function saveEdit(id: string) {
    await fetch(`/api/gallery/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ alt: editAlt, caption: editCaption }),
    });
    setData((prev) => ({
      images: prev.images.map((i) =>
        i.id === id ? { ...i, alt: editAlt, caption: editCaption } : i
      ),
    }));
    setEditingId(null);
  }

  if (loading) {
    return (
      <div className="p-8">
        <div className="h-4 bg-gray-100 rounded w-48 animate-pulse mb-2" />
        <div className="h-3 bg-gray-100 rounded w-64 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Gallery</h1>
          <p className="text-sm text-gray-500">Upload and manage your bakery photos.</p>
        </div>
        <div>
          <label
            htmlFor="gallery-upload"
            className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors"
          >
            {uploadStatus === 'uploading' ? 'Uploading...' : '+ Upload image'}
          </label>
          <input
            id="gallery-upload"
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="sr-only"
            onChange={handleUpload}
            disabled={uploadStatus === 'uploading'}
            aria-label="Upload a gallery image"
          />
          {uploadStatus === 'error' && (
            <p className="text-xs text-red-600 mt-1">{uploadError}</p>
          )}
        </div>
      </div>

      {data.images.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-gray-200 border-dashed">
          <div className="text-4xl mb-3">📷</div>
          <p className="text-sm font-medium text-gray-700 mb-1">No images yet</p>
          <p className="text-xs text-gray-500">Upload your first photo to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {data.images.map((img) => (
            <div key={img.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="relative aspect-square bg-gray-100">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>

              {editingId === img.id ? (
                <div className="p-3 space-y-2">
                  <input
                    type="text"
                    value={editAlt}
                    onChange={(e) => setEditAlt(e.target.value)}
                    placeholder="Alt text"
                    aria-label="Alt text"
                    className="w-full px-2 py-1.5 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-stone-300"
                  />
                  <input
                    type="text"
                    value={editCaption}
                    onChange={(e) => setEditCaption(e.target.value)}
                    placeholder="Caption (optional)"
                    aria-label="Caption"
                    className="w-full px-2 py-1.5 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-stone-300"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => saveEdit(img.id)}
                      className="flex-1 py-1.5 bg-stone-900 text-white text-xs rounded hover:bg-stone-800 transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="flex-1 py-1.5 bg-gray-100 text-gray-600 text-xs rounded hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-3">
                  {img.caption && (
                    <p className="text-xs text-gray-600 truncate mb-2">{img.caption}</p>
                  )}
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEdit(img)}
                      className="flex-1 py-1.5 bg-gray-100 text-gray-600 text-xs rounded hover:bg-gray-200 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(img.id)}
                      disabled={deletingId === img.id}
                      className="flex-1 py-1.5 bg-red-50 text-red-600 text-xs rounded hover:bg-red-100 disabled:opacity-50 transition-colors"
                    >
                      {deletingId === img.id ? '...' : 'Delete'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
