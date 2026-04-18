'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useLanguage } from '@/lib/language-context';

const PHOTO_SRCS = ['/conchas-display.jpg', '/fruit-tarts-closeup.jpg', '/bakery-display.jpg'];

export default function FoodShowcase() {
  const { t } = useLanguage();
  const photos = t.foodShowcase.photos;

  return (
    <section className="section-padding bg-white" aria-label="What we make">
      <div className="max-w-6xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label justify-center mb-4">{t.menu.label}</div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900">
            {t.gallery.heading1}{' '}
            <span className="italic text-rose-blush">{t.gallery.heading2}</span>
          </h2>
          <p className="mt-4 font-sans text-stone-500 max-w-sm mx-auto text-sm leading-relaxed">
            {t.menu.body}
          </p>
        </div>

        {/* Circular photos */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-6 lg:gap-10">
          {photos.map((photo, i) => (
            <div key={PHOTO_SRCS[i]} className="flex flex-col items-center gap-4 group">
              {/* Circle */}
              <div className="relative w-64 h-64 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-warm ring-4 ring-white transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={PHOTO_SRCS[i]}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 224px, 288px"
                />
              </div>
              {/* Label below */}
              <span className="font-serif text-lg font-semibold text-stone-800 tracking-wide">
                {photo.label}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/menu" className="btn-outline px-10 py-3 text-sm">
            {t.menu.seeFullMenu}
          </Link>
        </div>
      </div>
    </section>
  );
}
