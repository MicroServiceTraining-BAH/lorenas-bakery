import type { Metadata } from 'next';
import Link from 'next/link';

import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: "Custom Cakes, Catering & Bakery Services in Manassas, VA",
  description:
    "Lorena's Bakery offers custom celebration cakes, quinceañera pastries, catering trays, and bulk pan dulce orders in Manassas, VA. Serving Northern Virginia since 2010. Request a quote today.",
  alternates: {
    canonical: 'https://lorenasbakery.com/services',
  },
};

const SERVICES = [
  {
    id: 'custom-cakes',
    icon: '🎂',
    gradient: 'linear-gradient(145deg, #F9E8F5 0%, #E8C5E0 50%, #D4A0C8 100%)',
    title: 'Custom Celebration Cakes',
    tagline: 'Quinceañeras · Weddings · Birthdays · Baby Showers',
    description:
      'Every milestone deserves a cake made with intention. Our pastry chef Sofia creates layered cakes that combine modern design with authentic Salvadoran flavors — tres leches, dulce de leche, strawberry cream, and more. From a simple birthday tier to a six-tier quinceañera centerpiece, we build it to match your vision.',
    details: [
      'Tiered cakes from 1 to 6 layers',
      'Flavors: tres leches, vanilla bean, dulce de leche, strawberry cream, chocolate fudge',
      'Custom fondant, buttercream, or naked finishes',
      'Matching dessert table items available (polvorosas, petit fours, mini pastelitos)',
      'Local delivery available in Prince William and Fairfax counties',
      'Minimum 72 hours notice · large orders require 2–3 weeks',
    ],
    cta: 'Request a Custom Cake',
    href: '/contact',
  },
  {
    id: 'catering',
    icon: '🫘',
    gradient: 'linear-gradient(145deg, #E8F5F4 0%, #A8C5C2 50%, #5F8F8A 100%)',
    title: 'Catering & Event Trays',
    tagline: 'Office Events · School Functions · Community Gatherings',
    description:
      "Feed a crowd the right way. We build custom catering trays filled with assorted pan dulce, pastries, empanadas, and more — perfect for corporate breakfasts, school events, church gatherings, quinceañera receptions, and neighborhood parties. We've catered events across Northern Virginia for over a decade.",
    details: [
      'Minimum tray order: serves 12 guests',
      'Options: pan dulce assortment, savory pastelitos, empanada trays, dessert spreads',
      'Custom labeling and packaging available for corporate orders',
      'Pickup at our Manassas location or local delivery',
      'Advance notice required: at least 48 hours for standard trays, 1 week for large events',
      'Pricing based on tray size and item selection — call for a quote',
    ],
    cta: 'Get a Catering Quote',
    href: '/contact',
  },
  {
    id: 'custom-orders',
    icon: '🥐',
    gradient: 'linear-gradient(145deg, #F9E3C7 0%, #F5C99A 50%, #F0AE70 100%)',
    title: 'Custom Pan Dulce Orders',
    tagline: 'Reserved Pickup · Bulk Orders · Weekly Subscriptions',
    description:
      "Love our conchas but don't want to risk selling out? We take pre-orders for pickup so your favorites are always waiting when you arrive. Bulk orders for families, restaurants, and resellers are welcome — our items are baked fresh every morning and ready for pickup by 7am.",
    details: [
      'Reserve specific items the day before — call (703) 928-0838',
      'Bulk orders available (dozen pricing on most items)',
      'Weekly standing orders for restaurants and local resellers',
      'Items available: conchas, quesadilla salvadoreña, pastelitos, empanadas de leche, semitas, polvorosas',
      'Pickup at 5443 Wellington Rd, Manassas, VA — available from open',
    ],
    cta: 'Place a Pickup Order',
    href: '/contact',
  },
];

const FAQS = [
  {
    q: 'How far in advance do I need to order a custom cake?',
    a: 'Most custom cakes require at least 72 hours notice. For weddings, quinceañeras, or large multi-tier cakes, we recommend 2–3 weeks in advance to ensure we can accommodate your design and schedule.',
  },
  {
    q: 'Do you offer delivery in Northern Virginia?',
    a: 'Yes — we offer local delivery within Prince William and Fairfax counties for custom orders and catering. Delivery is available for a flat fee based on distance. Contact us to confirm your area.',
  },
  {
    q: 'Can you accommodate dietary restrictions?',
    a: 'We can accommodate some dietary needs — please ask about dairy-free or egg-free options when you place your order. Our kitchen does use flour, eggs, and dairy in most products, so we cannot guarantee allergen-free baking.',
  },
  {
    q: 'What information do you need for a custom cake order?',
    a: 'The more detail the better: event date, number of guests, flavor preferences, any design ideas or inspiration images, and your budget range. We follow up within one business day to finalize the design and confirm pricing.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Lorena's Bakery Services",
  description: "Custom cakes, catering, and bakery services in Manassas, VA",
  url: 'https://lorenasbakery.com/services',
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: s.description,
      provider: {
        '@type': 'Bakery',
        name: "Lorena's Bakery",
        url: 'https://lorenasbakery.com',
      },
      areaServed: {
        '@type': 'State',
        name: 'Virginia',
      },
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

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
          <div className="section-label justify-center mb-6">What We Offer</div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-stone-900 leading-tight">
            Bakery <span className="italic text-rose-blush">Services</span>
          </h1>
          <p className="mt-6 font-sans text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Custom cakes for life&apos;s biggest moments, catering trays for every gathering, and
            reserved pan dulce so your favorites are always waiting. All made from scratch in
            Manassas, VA.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Request a Quote
            </Link>
            <a href="tel:7039280838" className="btn-outline text-base px-8 py-4">
              Call (703) 928-0838
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white" aria-label="Our bakery services">
        <div className="max-w-7xl mx-auto container-padding space-y-24">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-14 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
              aria-labelledby={`service-${service.id}`}
            >
              {/* Visual */}
              <div
                className="rounded-[2.5rem] overflow-hidden shadow-warm flex items-center justify-center"
                style={{ background: service.gradient, aspectRatio: '4/3' }}
                role="img"
                aria-label={service.title}
              >
                <div className="text-center">
                  <div className="text-7xl mb-4" aria-hidden="true">
                    {service.icon}
                  </div>
                  <div className="font-script text-4xl text-white/70">{service.title.split(' ')[0]}</div>
                </div>
              </div>

              {/* Copy */}
              <div>
                <div className="section-label mb-5">{service.tagline}</div>
                <h2
                  id={`service-${service.id}`}
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
                          <path
                            d="M2 5l2.5 2.5L8 2.5"
                            stroke="#5F8F8A"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <Link href={service.href} className="btn-primary">
                  {service.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section
        className="py-16 bg-warm-gradient border-y border-stone-200/60"
        aria-label="Trust signals"
      >
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '15+', label: 'Years in Manassas, VA', color: 'text-rose-blush' },
              { value: '200+', label: 'Five-star Google reviews', color: 'text-teal-sage' },
              { value: '30+', label: 'Fresh items baked daily', color: 'text-gold' },
              { value: '100%', label: 'Made from scratch', color: 'text-rose-blush' },
            ].map(({ value, label, color }) => (
              <div key={label}>
                <div className={`font-serif text-4xl md:text-5xl font-bold ${color} mb-2`}>
                  {value}
                </div>
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
            <div className="section-label justify-center mb-5">Before You Order</div>
            <h2
              id="services-faq-heading"
              className="font-serif text-4xl font-bold text-stone-900 leading-tight"
            >
              Common <span className="italic text-rose-blush">Questions</span>
            </h2>
          </div>
          <dl className="space-y-6">
            {FAQS.map((faq) => (
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
            Ready to place your order?
          </h2>
          <p className="mt-5 font-sans text-rose-light/90 text-lg">
            Call us, send a message, or stop by the bakery. We&apos;ll take care of the rest.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-rose-blush font-semibold text-sm font-sans hover:bg-rose-pale transition-all duration-300"
            >
              Send Us a Message
            </Link>
            <a
              href="tel:7039280838"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-sm font-sans hover:bg-white/10 transition-all duration-300"
              aria-label="Call (703) 928-0838"
            >
              (703) 928-0838
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
