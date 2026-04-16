'use client';

import Image from 'next/image';
import Link from 'next/link';

import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/lib/language-context';

const GALLERY_STRUCTURE = [
  { src: '/bakery-full.jpg', span: 'sm:col-span-2 sm:row-span-2' },
  { src: '/fruit-tarts-closeup.jpg', span: '' },
  { src: '/bakery-display.jpg', span: '' },
  { src: '/fruit-tarts-case.jpg', span: 'sm:col-span-2' },
  { src: '/conchas-display.jpg', span: 'sm:col-span-2' },
];

export default function GalleryPageContent() {
  const { t } = useLanguage();
  const pg = t.galleryPage;

  return (
    <>
      <Breadcrumb items={[{ label: t.nav.gallery, href: '/gallery' }]} />

      {/* Hero */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #FFF6F8 0%, #FDE8EE 50%, #E8F5F4 100%)' }}
        aria-label="Gallery page header"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-rose-light/25 blur-3xl" />
          <div className="absolute bottom-0 -left-12 w-56 h-56 rounded-full bg-teal-pale blur-2xl" />
        </div>
        <div className="relative max-w-7xl mx-auto container-padding text-center">
          <div className="section-label justify-center mb-6">{pg.hero.label}</div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-stone-900 leading-tight">
            {pg.hero.heading.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="italic text-rose-blush">{pg.hero.heading.split(' ').slice(-1)[0]}</span>
          </h1>
          <p className="mt-6 font-sans text-lg text-stone-600 max-w-xl mx-auto leading-relaxed">
            {pg.hero.body}{' '}
            <a
              href="https://www.instagram.com/lorenasbakery.us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-blush font-medium hover:underline"
              aria-label="Follow Lorena's Bakery on Instagram"
            >
              @lorenasbakery.us
            </a>{' '}
            {pg.hero.followSuffix}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white" aria-label="Bakery photo gallery">
        <div className="max-w-7xl mx-auto container-padding">
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            style={{ gridAutoRows: '200px' }}
            role="list"
            aria-label="Gallery of Lorena's Bakery baked goods"
          >
            {pg.items.map((item, i) => {
              const structure = GALLERY_STRUCTURE[i];
              return (
                <figure
                  key={item.label}
                  role="listitem"
                  className={`${structure.span} rounded-3xl overflow-hidden group cursor-pointer relative bg-stone-100`}
                >
                  <Image
                    src={structure.src}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <figcaption className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-300 rounded-3xl flex flex-col items-center justify-end p-5 opacity-0 group-hover:opacity-100">
                    <p className="font-serif text-base font-bold text-white drop-shadow text-center">
                      {item.label}
                    </p>
                    <p className="font-sans text-xs text-white/80 drop-shadow text-center mt-1">
                      {item.caption}
                    </p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-warm-gradient" aria-labelledby="gallery-cta-heading">
        <div className="max-w-3xl mx-auto container-padding text-center">
          <div className="w-16 h-16 rounded-2xl bg-rose-blush/10 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#E88FA3" strokeWidth="2" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="#E88FA3" strokeWidth="2" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#E88FA3" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h2 id="gallery-cta-heading" className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
            {pg.cta.heading.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="italic text-rose-blush">{pg.cta.heading.split(' ').slice(-1)[0]}</span>
          </h2>
          <p className="mt-5 font-sans text-stone-600 leading-relaxed text-lg max-w-lg mx-auto">
            {pg.cta.body}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com/lorenasbakery.us/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
              aria-label="Follow Lorena's Bakery on Instagram"
            >
              {pg.cta.followBtn}
            </a>
            <Link href="/contact" className="btn-outline text-base px-8 py-4">
              {pg.cta.orderBtn}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
