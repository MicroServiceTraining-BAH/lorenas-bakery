'use client';

import { useLanguage } from '@/lib/language-context';

export default function LocationSection() {
  const { t } = useLanguage();
  const l = t.location;

  return (
    <section className="section-padding bg-warm-gradient" aria-labelledby="location-heading">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header — left aligned */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-label mb-5">{l.label}</div>
            <h2
              id="location-heading"
              className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight"
            >
              {l.heading1}{' '}
              <span className="italic text-rose-blush">{l.heading2}</span>
            </h2>
          </div>
          <p className="font-sans text-stone-500 max-w-xs leading-relaxed sm:text-right text-sm">
            {l.body}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* Info cards */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Address */}
            <div className="bg-white rounded-3xl p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-rose-pale flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#E87BA1" strokeWidth="2" />
                    <circle cx="12" cy="10" r="3" stroke="#E87BA1" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">{l.address}</h3>
                  <address className="not-italic font-sans text-stone-600 leading-relaxed text-sm">
                    10750 Sudley Manor Dr<br />
                    Manassas, VA 20109
                  </address>
                  <a
                    href="https://maps.google.com/?q=10750+Sudley+Manor+Dr+Manassas+VA+20109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-sans text-sm text-teal-sage font-medium hover:underline"
                    aria-label="Get directions to Lorena's Bakery on Google Maps"
                  >
                    {l.getDirections}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-3xl p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-gold-light flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="#F4C27A" strokeWidth="2" />
                    <path d="M12 6v6l4 2" stroke="#F4C27A" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-3">{l.hours}</h3>
                  <dl className="space-y-1.5">
                    {[
                      { day: l.days.weekdays, hours: '6:30 AM – 8:00 PM' },
                      { day: l.days.saturday, hours: '8:00 AM – 8:00 PM' },
                      { day: l.days.sunday, hours: '8:00 AM – 7:00 PM' },
                    ].map(({ day, hours }) => (
                      <div key={day} className="flex justify-between gap-4">
                        <dt className="font-sans text-sm text-stone-600">{day}</dt>
                        <dd className="font-sans text-sm font-semibold text-stone-800">{hours}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-3xl p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-teal-pale flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.61 3.4 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.77a16 16 0 006.32 6.32l.97-1.97a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#6080A8" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">{l.contact}</h3>
                  <a
                    href="tel:7037898919"
                    className="block font-sans text-sm text-stone-600 hover:text-rose-blush transition-colors"
                    aria-label="Call us at (703) 789-8919"
                  >
                    (703) 789-8919
                  </a>
                  <a
                    href="mailto:contact@lorenasbakery.com"
                    className="block font-sans text-sm text-stone-600 hover:text-rose-blush transition-colors mt-1"
                    aria-label="Email contact@lorenasbakery.com"
                  >
                    contact@lorenasbakery.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-warm h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps?q=10750+Sudley+Manor+Dr,+Manassas,+VA+20109&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lorena's Bakery location on Google Maps — 10750 Sudley Manor Dr, Manassas, VA 20109"
            />
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-10 bg-rose-blush rounded-3xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white">{l.cantMakeIt}</h3>
            <p className="font-sans text-rose-light/90 text-sm mt-1">{l.cantMakeItDesc}</p>
          </div>
          <a
            href="tel:7037898919"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-rose-blush font-semibold text-sm font-sans tracking-wide transition-all duration-300 hover:bg-rose-pale hover:shadow-soft flex-shrink-0"
            aria-label="Call us to place an order"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.61 3.4 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.77a16 16 0 006.32 6.32l.97-1.97a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#E87BA1" strokeWidth="2" />
            </svg>
            {l.callUs}
          </a>
        </div>
      </div>
    </section>
  );
}
