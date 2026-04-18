'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section
      className="relative min-h-[65vh] flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Full-bleed background photo */}
      <Image
        src="/bakery-full.jpg"
        alt="Fresh pan dulce and pastries at Lorena's Bakery in Manassas, VA"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-stone-950/65" aria-hidden="true" />
      {/* Top gradient mask so navbar stays readable */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-stone-950/70 to-transparent pointer-events-none" aria-hidden="true" />

      {/* Centered content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 sm:pt-36 pb-32 sm:pb-28">
        <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.18em] uppercase text-white/55 font-sans mb-6">
          <span className="block w-8 h-px bg-white/30" aria-hidden="true" />
          {h.label}
          <span className="block w-8 h-px bg-white/30" aria-hidden="true" />
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
          {h.heading1}{' '}
          <span className="italic text-rose-blush">{h.heading2}</span>
          <br />
          {h.heading3}
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-xl mx-auto font-sans leading-relaxed drop-shadow-md">
          {h.body}
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link href="/menu" className="btn-primary text-base px-8 py-4">
            {h.viewMenu}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/50 text-white font-semibold text-base font-sans tracking-wide transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            {h.orderNow}
          </Link>
        </div>
      </div>

      {/* Trust bar pinned to bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-stone-950/40 backdrop-blur-md border-t border-white/10 z-10"
        aria-label="Trust signals"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5">
          <div className="grid grid-cols-3 divide-x divide-white/15">
            <a
              href="#reviews"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 sm:gap-3 justify-center px-3 sm:px-6 group w-full"
            >
              <svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#F4C27A" />
              </svg>
              <div className="min-w-0">
                <div className="font-serif text-xs sm:text-sm font-semibold text-white truncate group-hover:text-gold transition-colors">{h.rating}</div>
                <div className="font-sans text-[10px] sm:text-xs text-white/55 truncate">{h.ratingDesc}</div>
              </div>
            </a>

            <div className="flex items-center gap-2 sm:gap-3 justify-center px-3 sm:px-6">
              <svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#E87BA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 22V12h6v10" stroke="#E87BA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="min-w-0">
                <div className="font-serif text-xs sm:text-sm font-semibold text-white truncate">{h.familyOwned}</div>
                <div className="font-sans text-[10px] sm:text-xs text-white/55 truncate">{h.familyDesc}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 justify-center px-3 sm:px-6">
              <svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="#6080A8" strokeWidth="2" />
                <path d="M12 6v6l4 2" stroke="#6080A8" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className="min-w-0">
                <div className="font-serif text-xs sm:text-sm font-semibold text-white truncate">{h.bakedFresh}</div>
                <div className="font-sans text-[10px] sm:text-xs text-white/55 truncate">{h.bakedDesc}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
