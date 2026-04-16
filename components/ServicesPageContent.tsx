'use client';

import Link from 'next/link';

import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/lib/language-context';

const SERVICE_STRUCTURE = [
  { id: 'custom-cakes', icon: '🎂', gradient: 'linear-gradient(145deg, #F9E8F5 0%, #E8C5E0 50%, #D4A0C8 100%)', href: '/contact' },
  { id: 'catering', icon: '🫘', gradient: 'linear-gradient(145deg, #E8F5F4 0%, #A8C5C2 50%, #5F8F8A 100%)', href: '/contact' },
  { id: 'custom-orders', icon: '🥐', gradient: 'linear-gradient(145deg, #F9E3C7 0%, #F5C99A 50%, #F0AE70 100%)', href: '/contact' },
];

export default function ServicesPageContent() {
  const { t } = useLanguage();
  const pg = t.servicesPage;

  return (
    <>
      <Breadcrumb items={[{ label: t.nav.services, href: '/services' }]} />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #FFF6F8 0%, #FFF3E8 50%, #EDF5F4 100%)' }}
        aria-label="Services page header"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gold-light/30 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-rose-light/20 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto container-padding text-center">
          <div className="section-label justify-center mb-6">{pg.hero.label}</div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-stone-900 leading-tight">
            {pg.hero.heading.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="italic text-rose-blush">{pg.hero.heading.split(' ').slice(-1)[0]}</span>
          </h1>
          <p className="mt-6 font-sans text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {pg.hero.body}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              {pg.hero.requestQuote}
            </Link>
            <a href="tel:7039280838" className="btn-outline text-base px-8 py-4">
              {pg.hero.call}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white" aria-label="Our bakery services">
        <div className="max-w-7xl mx-auto container-padding space-y-24">
          {pg.services.map((service, index) => {
            const structure = SERVICE_STRUCTURE[index];
            return (
              <article
                key={structure.id}
                id={structure.id}
                className={`grid lg:grid-cols-2 gap-14 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
                aria-labelledby={`service-${structure.id}`}
              >
                <div
                  className="rounded-[2.5rem] overflow-hidden shadow-warm flex items-center justify-center"
                  style={{ background: structure.gradient, aspectRatio: '4/3' }}
                  role="img"
                  aria-label={service.title}
                >
                  <div className="text-center">
                    <div className="text-7xl mb-4" aria-hidden="true">{structure.icon}</div>
                    <div className="font-script text-4xl text-white/70">{service.title.split(' ')[0]}</div>
                  </div>
                </div>

                <div>
                  <div className="section-label mb-5">{service.tagline}</div>
                  <h2
                    id={`service-${structure.id}`}
                    className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-5"
                  >
                    {service.title}
                  </h2>
                  <p className="font-sans text-stone-600 leading-relaxed mb-8">{service.description}</p>

                  <ul className="space-y-2.5 mb-10" aria-label="Service details">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 font-sans text-sm text-stone-600">
                        <span
                          className="mt-0.5 w-5 h-5 rounded-full bg-teal-pale flex items-center justify-center flex-shrink-0"
                          aria-hidden="true"
                        >
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2.5 2.5L8 2.5" stroke="#5F8F8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <Link href={structure.href} className="btn-primary">
                    {service.cta}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Trust strip */}
      <section
        className="py-16 bg-warm-gradient border-y border-stone-200/60"
        aria-label="Trust signals"
      >
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {pg.trust.items.map(({ value, label, color }) => (
              <div key={label}>
                <div className={`font-serif text-4xl md:text-5xl font-bold ${color} mb-2`}>{value}</div>
                <div className="font-sans text-sm text-stone-500 leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white" aria-labelledby="services-faq-heading">
        <div className="max-w-3xl mx-auto container-padding">
          <div className="text-center mb-14">
            <div className="section-label justify-center mb-5">{pg.faq.label}</div>
            <h2
              id="services-faq-heading"
              className="font-serif text-4xl font-bold text-stone-900 leading-tight"
            >
              {pg.faq.heading.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="italic text-rose-blush">{pg.faq.heading.split(' ').slice(-1)[0]}</span>
            </h2>
          </div>
          <dl className="space-y-6">
            {pg.faq.items.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-cream p-7">
                <dt className="font-serif text-lg font-bold text-stone-900 mb-3">{faq.q}</dt>
                <dd className="font-sans text-sm text-stone-600 leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-rose-blush" aria-labelledby="services-cta-heading">
        <div className="max-w-3xl mx-auto container-padding text-center">
          <h2
            id="services-cta-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            {pg.cta.heading}
          </h2>
          <p className="mt-5 font-sans text-rose-light/90 text-lg">{pg.cta.body}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-rose-blush font-semibold text-sm font-sans hover:bg-rose-pale transition-all duration-300"
            >
              {pg.cta.sendMessage}
            </Link>
            <a
              href="tel:7039280838"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-sm font-sans hover:bg-white/10 transition-all duration-300"
              aria-label={`Call ${pg.cta.phone}`}
            >
              {pg.cta.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
