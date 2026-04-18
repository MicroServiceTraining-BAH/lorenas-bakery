'use client';

import ContactForm from '@/components/ContactForm';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/lib/language-context';

export default function ContactPageContent() {
  const { t } = useLanguage();
  const pg = t.contactPage;

  const hours = [
    { day: pg.info.hours.days.weekdays, hours: pg.info.hours.times.weekdays },
    { day: pg.info.hours.days.saturday, hours: pg.info.hours.times.saturday },
    { day: pg.info.hours.days.sunday, hours: pg.info.hours.times.sunday },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: t.nav.contact, href: '/contact' }]} />

      {/* Hero */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #FFF6F9 0%, #EBF3FA 50%, #FFF3E8 100%)' }}
        aria-label="Contact page header"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-teal-pale/50 blur-3xl" />
          <div className="absolute bottom-0 -left-12 w-64 h-64 rounded-full bg-gold-light/30 blur-2xl" />
        </div>
        <div className="relative max-w-7xl mx-auto container-padding text-center">
          <div className="section-label justify-center mb-6">{pg.hero.label}</div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-stone-900 leading-tight">
            {pg.hero.heading.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="italic text-rose-blush">{pg.hero.heading.split(' ').slice(-1)[0]}</span>
          </h1>
          <p className="mt-6 font-sans text-lg text-stone-600 max-w-xl mx-auto leading-relaxed">
            {pg.hero.body}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white" aria-labelledby="contact-form-heading">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Left — Info */}
            <div className="lg:col-span-2">
              <h2 id="contact-form-heading" className="sr-only">Contact information and form</h2>

              <div className="space-y-5">
                {/* Phone */}
                <a
                  href="tel:7037898919"
                  className="flex items-start gap-4 p-6 rounded-3xl bg-cream hover:shadow-card transition-shadow duration-200 group"
                  aria-label="Call us at (703) 789-8919"
                >
                  <div className="w-12 h-12 rounded-2xl bg-rose-blush flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.61 3.4 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.77a16 16 0 006.32 6.32l.97-1.97a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-sans text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">
                      {pg.info.phone.label}
                    </div>
                    <div className="font-serif text-xl font-bold text-stone-900">(703) 789-8919</div>
                    <div className="font-sans text-sm text-stone-500 mt-0.5">{pg.info.phone.subtitle}</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@lorenasbakery.com"
                  className="flex items-start gap-4 p-6 rounded-3xl bg-cream hover:shadow-card transition-shadow duration-200 group"
                  aria-label="Email contact@lorenasbakery.com"
                >
                  <div className="w-12 h-12 rounded-2xl bg-teal-sage flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" />
                      <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-sans text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">
                      {pg.info.email.label}
                    </div>
                    <div className="font-serif text-lg font-bold text-stone-900">contact@lorenasbakery.com</div>
                    <div className="font-sans text-sm text-stone-500 mt-0.5">{pg.info.email.subtitle}</div>
                  </div>
                </a>

                {/* Address */}
                <a
                  href="https://maps.google.com/?q=10750+Sudley+Manor+Dr+Manassas+VA+20109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 rounded-3xl bg-cream hover:shadow-card transition-shadow duration-200 group"
                  aria-label="Get directions to our bakery on Google Maps"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gold flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="white" strokeWidth="2" />
                      <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-sans text-xs font-semibold text-stone-500 tracking-wide uppercase mb-1">
                      {pg.info.location.label}
                    </div>
                    <address className="not-italic font-serif text-lg font-bold text-stone-900 leading-snug">
                      10750 Sudley Manor Dr<br />
                      Manassas, VA 20109
                    </address>
                    <div className="font-sans text-sm text-teal-sage font-medium mt-1">
                      {pg.info.location.directions}
                    </div>
                  </div>
                </a>

                {/* Hours */}
                <div className="p-6 rounded-3xl bg-cream">
                  <div className="font-sans text-xs font-semibold text-stone-500 tracking-wide uppercase mb-4">
                    {pg.info.hours.label}
                  </div>
                  <dl className="space-y-2">
                    {hours.map(({ day, hours: time }) => (
                      <div key={day} className="flex justify-between gap-4">
                        <dt className="font-sans text-sm text-stone-600">{day}</dt>
                        <dd className="font-sans text-sm font-semibold text-stone-800">{time}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 font-sans text-xs text-stone-400">{pg.info.hours.note}</p>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-2">
                  {pg.form.heading}
                </h3>
                <p className="font-sans text-stone-600 text-sm leading-relaxed">{pg.form.description}</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16 bg-warm-gradient" aria-labelledby="contact-phone-cta">
        <div className="max-w-3xl mx-auto container-padding text-center">
          <p className="font-sans text-stone-500 text-sm mb-3">{pg.quickCta.pre}</p>
          <h2 id="contact-phone-cta" className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-6">
            {pg.quickCta.heading}
          </h2>
          <a
            href="tel:7037898919"
            className="btn-primary text-base px-10 py-4"
            aria-label="Call Lorena's Bakery at (703) 789-8919"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.61 3.4 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.77a16 16 0 006.32 6.32l.97-1.97a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" />
            </svg>
            (703) 789-8919
          </a>
        </div>
      </section>
    </>
  );
}
