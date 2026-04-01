import Link from 'next/link';
import { cookies } from 'next/headers';

import { getSession, getUserById } from '@/lib/auth';
import { readData } from '@/lib/data';
import type { BusinessData, GalleryData, MenuData } from '@/types/cms';

export const metadata = { title: 'Dashboard — CMS' };

const SECTIONS = [
  {
    href: '/admin/menu',
    icon: '🍽️',
    label: 'Menu Items',
    description: 'Add, edit, or remove items and categories',
    color: 'bg-amber-50 text-amber-700 border-amber-100',
    iconBg: 'bg-amber-100',
  },
  {
    href: '/admin/business',
    icon: '📍',
    label: 'Business Info',
    description: 'Phone, address, and opening hours',
    color: 'bg-teal-50 text-teal-700 border-teal-100',
    iconBg: 'bg-teal-100',
  },
  {
    href: '/admin/home',
    icon: '✏️',
    label: 'Homepage',
    description: 'Edit the hero headline and main photo',
    color: 'bg-purple-50 text-purple-700 border-purple-100',
    iconBg: 'bg-purple-100',
  },
  {
    href: '/admin/gallery',
    icon: '🖼️',
    label: 'Gallery',
    description: 'Upload and manage bakery photos',
    color: 'bg-rose-50 text-rose-700 border-rose-100',
    iconBg: 'bg-rose-100',
  },
] as const;

export default async function DashboardPage() {
  const cookieStore = cookies();
  const token = cookieStore.get('cms-session')?.value ?? '';
  const session = token ? await getSession(token) : null;
  const user = session ? await getUserById(session.userId) : null;

  const [menu, business, gallery] = await Promise.all([
    readData<MenuData>('menu'),
    readData<BusinessData>('business'),
    readData<GalleryData>('gallery'),
  ]);
  const itemCount = menu.categories.reduce((s, c) => s + c.items.length, 0);

  const STATS = [
    { label: 'Menu items', value: String(itemCount) },
    { label: 'Categories', value: String(menu.categories.length) },
    { label: 'Gallery photos', value: String(gallery.images.length) },
    { label: 'Location', value: `${business.city}, ${business.state}` },
  ];

  return (
    <div className="p-8 max-w-3xl">
      {/* Welcome header */}
      <div className="mb-10">
        <p className="text-sm text-gray-400 mb-1">Welcome back</p>
        <h1 className="text-3xl font-semibold text-gray-900">
          {user?.name ?? 'Admin'} 👋
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          What would you like to update today?
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        {STATS.map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-200 px-4 py-3 text-center">
            <div className="text-xl font-bold text-gray-900">{s.value}</div>
            <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Action cards */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {SECTIONS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className={`group flex items-start gap-4 p-5 bg-white rounded-2xl border hover:shadow-sm transition-all duration-200 ${s.color}`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${s.iconBg}`}>
              {s.icon}
            </div>
            <div>
              <div className="font-semibold text-sm mb-0.5">{s.label}</div>
              <div className="text-xs opacity-70 leading-relaxed">{s.description}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer links */}
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 transition-colors underline underline-offset-2"
        >
          View public site ↗
        </a>
        <span>·</span>
        <a
          href="/menu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 transition-colors underline underline-offset-2"
        >
          View menu ↗
        </a>
        <span>·</span>
        <a
          href="/gallery"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 transition-colors underline underline-offset-2"
        >
          View gallery ↗
        </a>
      </div>
    </div>
  );
}
