'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-hero-gradient"
      aria-label="Hero section"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-rose-light/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gold-light/30 blur-3xl" />
        <div className="absolute top-1/3 -right-10 w-[280px] h-[280px] rounded-full bg-teal-pale blur-2xl" />

        <svg className="absolute top-24 right-16 opacity-20" width="120" height="120" viewBox="0 0 120 120" fill="none">
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={col * 24 + 12} cy={row * 24 + 12} r="2.5" fill="#E88FA3" />
            ))
          )}
        </svg>

        <svg className="absolute bottom-32 left-10 opacity-15" width="80" height="80" viewBox="0 0 80 80" fill="none">
          {Array.from({ length: 4 }).map((_, row) =>
            Array.from({ length: 4 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={col * 20 + 10} cy={row * 20 + 10} r="2" fill="#5F8F8A" />
            ))
          )}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <div className="section-label animate-fade-up mb-6">{h.label}</div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-900 leading-[1.06] tracking-tight animate-fade-up-delay-1">
              {h.heading1}{' '}
              <span className="italic text-rose-blush">{h.heading2}</span>
              <br />
              {h.heading3}
            </h1>

            <p className="mt-6 text-lg text-stone-600 leading-relaxed max-w-md font-sans animate-fade-up-delay-2">
              {h.body}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up-delay-3">
              <Link href="/menu" className="btn-primary text-base px-8 py-4">
                {h.viewMenu}
              </Link>
              <Link href="/contact" className="btn-outline text-base px-8 py-4">
                {h.orderNow}
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-12 flex flex-wrap items-center gap-8 animate-fade-up-delay-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#F4C27A" />
                  </svg>
                </div>
                <div>
                  <div className="font-serif text-base font-semibold text-stone-800">{h.rating}</div>
                  <div className="font-sans text-xs text-stone-500">{h.ratingDesc}</div>
                </div>
              </div>

              <div className="w-px h-8 bg-stone-200" aria-hidden="true" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-pale flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#E88FA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 22V12h6v10" stroke="#E88FA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-serif text-base font-semibold text-stone-800">{h.familyOwned}</div>
                  <div className="font-sans text-xs text-stone-500">{h.familyDesc}</div>
                </div>
              </div>

              <div className="w-px h-8 bg-stone-200" aria-hidden="true" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-pale flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#5F8F8A" strokeWidth="2" />
                    <path d="M12 6v6l4 2" stroke="#5F8F8A" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-serif text-base font-semibold text-stone-800">{h.bakedFresh}</div>
                  <div className="font-sans text-xs text-stone-500">{h.bakedDesc}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Primary card */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-float animate-fade-up-delay-2">
                <div className="w-full aspect-[4/5] relative">
                  <Image
                    src="/bakery-full.jpg"
                    alt="Lorena's Bakery display case filled with fresh pan dulce, pastries, and baked goods"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Overlay badge */}
                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-warm">
                  <div className="font-script text-rose-blush text-xl leading-none">{h.freshToday}</div>
                  <div className="font-sans text-xs text-stone-500 mt-0.5">{h.readyBy}</div>
                </div>
              </div>

              {/* Floating card — Location */}
              <div className="absolute -bottom-6 -left-6 lg:-left-10 bg-white rounded-2xl px-5 py-4 shadow-float animate-float z-10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-sage flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="white" strokeWidth="2" />
                      <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-sm text-stone-800">Manassas, VA</div>
                    <div className="font-sans text-xs text-stone-500">Wellington Rd</div>
                  </div>
                </div>
              </div>

              {/* Floating card — Hours */}
              <div className="absolute -top-6 -left-4 bg-white rounded-2xl px-5 py-4 shadow-float animate-float-delay z-10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                      <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-sm text-stone-800">Open Daily</div>
                    <div className="font-sans text-xs text-stone-500">7am – 7pm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="white" fillOpacity="0.6" />
        </svg>
      </div>
    </section>
  );
}
