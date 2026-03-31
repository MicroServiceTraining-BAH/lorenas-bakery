'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import type { HomeData } from '@/types/cms';

type Status = 'idle' | 'saving' | 'saved' | 'error';
type UploadStatus = 'idle' | 'uploading' | 'done' | 'error';

const EMPTY: HomeData = {
  label: '',
  heading1: '',
  heading2: '',
  heading3: '',
  body: '',
  heroImage: '',
};

export default function HomePage() {
  const [data, setData] = useState<HomeData>(EMPTY);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(true);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>('idle');
  const [uploadError, setUploadError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch('/api/home')
      .then((r) => r.json())
      .then((d: HomeData) => setData(d))
      .finally(() => setLoading(false));
  }, []);

  function set(field: keyof HomeData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
    setStatus('idle');
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setStatus('saving');
    setErrorMsg('');
    try {
      const res = await fetch('/api/home', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const d = (await res.json()) as { error?: string };
        throw new Error(d.error ?? 'Save failed.');
      }
      setStatus('saved');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Save failed. Please try again.');
    }
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadStatus('uploading');
    setUploadError('');
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      const d = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !d.url) throw new Error(d.error ?? 'Upload failed.');
      set('heroImage', d.url);
      setUploadStatus('done');
    } catch (err) {
      setUploadStatus('error');
      setUploadError(err instanceof Error ? err.message : 'Upload failed.');
    }
    if (fileRef.current) fileRef.current.value = '';
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
    <div className="p-8 max-w-2xl">
      <h1 className="text-2xl font-semibold text-gray-900 mb-1">Homepage</h1>
      <p className="text-sm text-gray-500 mb-8">Edit the hero section that visitors see first.</p>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Hero text */}
        <fieldset className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
          <legend className="text-sm font-semibold text-gray-700 mb-2">Hero text</legend>

          <div>
            <label htmlFor="label" className="block text-sm font-medium text-gray-700 mb-1">
              Label (small text above heading)
            </label>
            <input
              id="label"
              type="text"
              value={data.label}
              onChange={(e) => set('label', e.target.value)}
              placeholder="Manassas, Virginia · Since 2010"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label htmlFor="heading1" className="block text-sm font-medium text-gray-700 mb-1">
                Heading line 1
              </label>
              <input
                id="heading1"
                type="text"
                value={data.heading1}
                onChange={(e) => set('heading1', e.target.value)}
                placeholder="Fresh Pan Dulce"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
              />
            </div>
            <div>
              <label htmlFor="heading2" className="block text-sm font-medium text-gray-700 mb-1">
                Heading line 2 (accent)
              </label>
              <input
                id="heading2"
                type="text"
                value={data.heading2}
                onChange={(e) => set('heading2', e.target.value)}
                placeholder="& Pastries"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
              />
            </div>
            <div>
              <label htmlFor="heading3" className="block text-sm font-medium text-gray-700 mb-1">
                Heading line 3
              </label>
              <input
                id="heading3"
                type="text"
                value={data.heading3}
                onChange={(e) => set('heading3', e.target.value)}
                placeholder="Made Daily"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
              />
            </div>
          </div>

          <div>
            <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">
              Body text
            </label>
            <textarea
              id="body"
              rows={3}
              value={data.body}
              onChange={(e) => set('body', e.target.value)}
              placeholder="Describe your bakery..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-300 resize-none"
            />
          </div>
        </fieldset>

        {/* Hero image */}
        <fieldset className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
          <legend className="text-sm font-semibold text-gray-700 mb-2">Hero image</legend>

          {data.heroImage && (
            <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
              <Image src={data.heroImage} alt="Hero" fill className="object-cover" />
              <button
                type="button"
                onClick={() => set('heroImage', '')}
                className="absolute top-2 right-2 bg-white text-gray-600 rounded-full w-6 h-6 text-xs hover:bg-red-50 hover:text-red-600 transition-colors flex items-center justify-center shadow"
                aria-label="Remove hero image"
              >
                ×
              </button>
            </div>
          )}

          <div>
            <label htmlFor="hero-upload" className="block text-sm font-medium text-gray-700 mb-1">
              {data.heroImage ? 'Replace image' : 'Upload image'}
            </label>
            <input
              id="hero-upload"
              ref={fileRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:bg-gray-100 file:text-sm file:text-gray-700 hover:file:bg-gray-200 cursor-pointer"
            />
            {uploadStatus === 'uploading' && (
              <p className="text-xs text-gray-500 mt-1">Uploading...</p>
            )}
            {uploadStatus === 'done' && (
              <p className="text-xs text-green-600 mt-1">Image uploaded.</p>
            )}
            {uploadStatus === 'error' && (
              <p className="text-xs text-red-600 mt-1">{uploadError}</p>
            )}
          </div>
        </fieldset>

        {/* Footer */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === 'saving'}
            className="px-5 py-2.5 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'saving' ? 'Saving...' : 'Save changes'}
          </button>
          {status === 'saved' && <span className="text-sm text-green-600">Changes saved.</span>}
          {status === 'error' && (
            <span role="alert" className="text-sm text-red-600">
              {errorMsg}
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
