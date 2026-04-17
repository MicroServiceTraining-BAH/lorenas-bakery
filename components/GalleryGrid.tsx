'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

type GalleryCell = {
  label: string;
  src: string;
  span?: string;
};

const GALLERY_CELLS: GalleryCell[] = [
  {
    label: "Full spread of fresh pan dulce and Salvadoran pastries at Lorena's Bakery in Manassas, VA",
    src: '/bakery-full.jpg',
    span: 'col-span-2 row-span-2',
  },
  {
    label: 'Fresh custard fruit tarts topped with strawberries, kiwi, and blueberries',
    src: '/fruit-tarts-closeup.jpg',
  },
  {
    label: "Daily selection of flaky pastries, cakes, and breads in Lorena's Bakery display case",
    src: '/bakery-display.jpg',
  },
  {
    label: 'Freshly baked conchas and butter cookies with colorful sprinkles — a Salvadoran bakery staple',
    src: '/conchas-display.jpg',
    span: 'col-span-2',
  },
  {
    label: 'Individual fruit tarts and cream desserts made fresh daily at Lorena\'s Bakery',
    src: '/fruit-tarts-case.jpg',
  },
];

export default function GalleryGrid() {
  const { t } = useLanguage();
  const g = t.gallery;

  return (
    <section className="section-padding bg-white" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-label mb-4">{g.label}</div>
            <h2
              id="gallery-heading"
              className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight"
            >
              {g.heading1}{' '}
              <span className="italic text-rose-blush">{g.heading2}</span>
            </h2>
          </div>
          <p className="font-sans text-stone-600 max-w-xs leading-relaxed sm:text-right text-balance">
            {g.followText}{' '}
            <a
              href="https://www.instagram.com/lorenasbakery.us/"
              className="text-rose-blush font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Lorena's Bakery on Instagram"
            >
              @lorenasbakery.us
            </a>{' '}
            {g.followSuffix}
          </p>
        </div>

        {/* Gallery grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          style={{ gridAutoRows: '180px' }}
          role="list"
          aria-label="Photo gallery of our baked goods"
        >
          {GALLERY_CELLS.map((cell) => (
            <div
              key={cell.label}
              role="listitem"
              className={`${cell.span ?? ''} rounded-3xl overflow-hidden group cursor-pointer relative bg-stone-100`}
            >
              <Image
                src={cell.src}
                alt={cell.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-300 rounded-3xl flex items-end p-4 opacity-0 group-hover:opacity-100">
                <span className="font-sans text-sm font-semibold text-white drop-shadow">
                  {cell.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link href="/gallery" className="btn-outline text-sm px-8 py-3">
            {g.viewFull}
          </Link>
        </div>
      </div>
    </section>
  );
}
