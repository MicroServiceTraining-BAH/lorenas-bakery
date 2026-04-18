'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useLanguage } from '@/lib/language-context';

export default function AboutSection() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section className="section-padding bg-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main visual */}
              <div
                className="relative rounded-[2.5rem] overflow-hidden shadow-warm"
                style={{ aspectRatio: '4/5' }}
              >
                <Image
                  src="/fruit-tarts-case.jpg"
                  alt="Fruit tarts and pastries in Lorena's Bakery display case"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/65 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="font-script text-3xl text-white leading-snug drop-shadow-sm">
                    &ldquo;Donde la tradición no se pierde&rdquo;
                  </p>
                  <p className="font-sans text-white/70 text-sm mt-2">— Lorena</p>
                </div>
              </div>

              {/* Accent card */}
              <div className="absolute -bottom-8 -right-6 lg:-right-10 bg-teal-sage rounded-2xl px-6 py-5 shadow-float text-white">
                <div className="font-script text-3xl mb-1">2026</div>
                <div className="font-sans text-xs opacity-80 leading-snug">{a.yearsCaption}</div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-4 border-gold/40 flex items-center justify-center" aria-hidden="true">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#F4C27A" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Copy */}
          <div className="order-1 lg:order-2">
            <div className="section-label mb-6">{a.label}</div>
            <h2
              id="about-heading"
              className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6"
            >
              {a.heading1}{' '}
              <span className="italic text-rose-blush">{a.heading2}</span>
            </h2>

            <div className="space-y-5 font-sans text-stone-600 leading-relaxed text-base">
              <p>{a.p1}</p>
              <p>{a.p2}</p>
              <p>{a.p3}</p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { value: '2026', label: a.stat1, color: 'bg-rose-pale' },
                { value: '30+', label: a.stat2, color: 'bg-teal-pale' },
                { value: '200+', label: a.stat3, color: 'bg-gold-light' },
                { value: '100%', label: a.stat4, color: 'bg-rose-pale' },
              ].map(({ value, label, color }) => (
                <div key={label} className={`${color} rounded-2xl p-5`}>
                  <div className="font-serif text-3xl font-bold text-stone-900">{value}</div>
                  <div className="font-sans text-sm text-stone-600 mt-1">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/about" className="btn-teal">
                {a.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
