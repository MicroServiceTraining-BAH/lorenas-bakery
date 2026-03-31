import Link from 'next/link';

import { readData } from '@/lib/data';
import type { BusinessData, GalleryData, MenuData } from '@/types/cms';

export const metadata = { title: 'Dashboard — CMS' };

export default function DashboardPage() {
  const menu = readData<MenuData>('menu.json');
  const business = readData<BusinessData>('business.json');
  const gallery = readData<GalleryData>('gallery.json');

  const itemCount = menu.categories.reduce((sum, c) => sum + c.items.length, 0);

  const TILES = [
    {
      href: '/admin/menu',
      label: 'Menu Items',
      value: `${itemCount} items across ${menu.categories.length} categories`,
      action: 'Manage menu →',
    },
    {
      href: '/admin/business',
      label: 'Business Info',
      value: `${business.phone} · ${business.city}, ${business.state}`,
      action: 'Edit info →',
    },
    {
      href: '/admin/gallery',
      label: 'Gallery',
      value: `${gallery.images.length} image${gallery.images.length !== 1 ? 's' : ''} uploaded`,
      action: 'Manage gallery →',
    },
    {
      href: '/admin/home',
      label: 'Homepage',
      value: `"${menu.categories[0]?.name ?? 'Menu'}" and more`,
      action: 'Edit homepage →',
    },
  ];

  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-2xl font-semibold text-gray-900 mb-1">Dashboard</h1>
      <p className="text-sm text-gray-500 mb-8">Manage your bakery&apos;s content.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        {TILES.map((tile) => (
          <Link
            key={tile.href}
            href={tile.href}
            className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
              {tile.label}
            </div>
            <div className="text-sm text-gray-700 mb-4 leading-relaxed">{tile.value}</div>
            <div className="text-sm font-medium text-stone-900">{tile.action}</div>
          </Link>
        ))}
      </div>

      <div className="mt-10 p-5 bg-white rounded-xl border border-gray-200">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
          Quick links
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-600 hover:text-stone-900 underline underline-offset-2"
          >
            View public site
          </a>
          <span className="text-gray-300">·</span>
          <a
            href="/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-600 hover:text-stone-900 underline underline-offset-2"
          >
            View menu page
          </a>
        </div>
      </div>
    </div>
  );
}
