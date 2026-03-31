import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { readData } from '@/lib/data';
import type { MenuData } from '@/types/cms';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    "Explore Lorena's Bakery full menu — authentic Salvadoran pan dulce, conchas, pastelitos, empanadas, quesadilla salvadoreña, custom cakes, and specialty coffee in Manassas, VA.",
};

export default function MenuPage() {
  const { categories } = readData<MenuData>('menu.json');

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #FFF6F8 0%, #FFF3E8 60%, #FDE8EE 100%)' }}
        aria-label="Menu page header"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gold-light/30 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-rose-light/20 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto container-padding text-center">
          <div className="section-label justify-center mb-6">Baked Fresh Daily</div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-stone-900 leading-tight">
            Our <span className="italic text-rose-blush">Menu</span>
          </h1>
          <p className="mt-6 font-sans text-lg text-stone-600 max-w-xl mx-auto leading-relaxed">
            Everything made from scratch, every morning. Come early — we often sell out by noon.
          </p>
          <p className="mt-3 font-sans text-sm text-stone-500">
            For custom orders, call{' '}
            <a href="tel:7039280838" className="text-rose-blush hover:underline font-medium">
              (703) 928-0838
            </a>{' '}
            at least 72 hours in advance.
          </p>
        </div>
      </section>

      {/* Menu sections */}
      <section className="section-padding bg-white" aria-label="Full menu">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="space-y-20">
            {categories.map((category) => (
              <div key={category.id} id={category.id}>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-8 pb-4 border-b border-stone-100">
                  {category.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {category.items.map((item) => (
                    <article
                      key={item.id}
                      className={`rounded-2xl bg-cream hover:bg-rose-pale/40 transition-colors duration-200 overflow-hidden ${item.image ? '' : 'flex items-start gap-5 p-6'}`}
                    >
                      {item.image ? (
                        /* Photo layout — image on top, text below */
                        <>
                          <div className="relative w-full h-48">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, 50vw"
                            />
                            {item.tag && (
                              <span className="absolute top-3 right-3 inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-rose-blush font-sans text-xs font-semibold shadow-sm">
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <div className="p-5">
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                                {item.name}
                              </h3>
                            </div>
                            <p className="font-sans text-sm text-stone-600 leading-relaxed mb-3">
                              {item.description}
                            </p>
                            <div className="font-serif text-base font-semibold text-teal-sage">
                              {item.price}
                            </div>
                          </div>
                        </>
                      ) : (
                        /* Emoji layout — original side-by-side */
                        <>
                          <div className="text-3xl flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-card">
                            <span aria-hidden="true">{item.emoji}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                                {item.name}
                              </h3>
                              {item.tag && (
                                <span className="inline-flex items-center flex-shrink-0 px-2.5 py-0.5 rounded-full bg-rose-pale text-rose-blush font-sans text-xs font-semibold">
                                  {item.tag}
                                </span>
                              )}
                            </div>
                            <p className="font-sans text-sm text-stone-600 leading-relaxed mb-3">
                              {item.description}
                            </p>
                            <div className="font-serif text-base font-semibold text-teal-sage">
                              {item.price}
                            </div>
                          </div>
                        </>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom orders CTA */}
      <section className="py-20 bg-warm-gradient" aria-labelledby="menu-cta-heading">
        <div className="max-w-3xl mx-auto container-padding text-center">
          <div className="section-label justify-center mb-6">Special Occasions</div>
          <h2
            id="menu-cta-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight"
          >
            Custom Orders Welcome
          </h2>
          <p className="mt-5 font-sans text-stone-600 leading-relaxed text-lg max-w-xl mx-auto">
            From quinceañera cakes to wedding pastries to corporate event trays — we love creating
            something special just for you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Request a Custom Order
            </Link>
            <a href="tel:7039280838" className="btn-outline text-base px-8 py-4">
              Call (703) 928-0838
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
