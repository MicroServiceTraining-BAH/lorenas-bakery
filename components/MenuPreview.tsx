'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useLanguage } from '@/lib/language-context';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag: string;
  image?: string;
  gradient: string;
};

export default function MenuPreview() {
  const { t } = useLanguage();
  const m = t.menu;

  const FEATURED: MenuItem[] = [
    {
      name: 'Conchas',
      description: m.items.conchas.description,
      price: 'from $2.50',
      tag: m.items.conchas.tag,
      image: '/conchas-display.jpg',
      gradient: 'linear-gradient(145deg, #F9E3C7 0%, #F5C99A 50%, #F0AE70 100%)',
    },
    {
      name: 'Quesadilla Salvadoreña',
      description: m.items.quesadilla.description,
      price: 'from $3.50',
      tag: m.items.quesadilla.tag,
      image: '/fruit-tarts-closeup.jpg',
      gradient: 'linear-gradient(145deg, #EBF3FA 0%, #9AB8D4 50%, #6080A8 100%)',
    },
  ];

  const LIST_ITEMS: MenuItem[] = [
    {
      name: 'Pastelitos',
      description: m.items.pastelitos.description,
      price: 'from $3.00',
      tag: m.items.pastelitos.tag,
      gradient: 'linear-gradient(145deg, #FDE8EE 0%, #F2B8CE 50%, #E87BA1 100%)',
    },
    {
      name: 'Empanadas de Leche',
      description: m.items.empanadas.description,
      price: 'from $2.75',
      tag: m.items.empanadas.tag,
      gradient: 'linear-gradient(145deg, #FFF3D6 0%, #FAE4B8 50%, #F4C27A 100%)',
    },
    {
      name: 'Café de Olla',
      description: m.items.cafe.description,
      price: 'from $3.00',
      tag: m.items.cafe.tag,
      gradient: 'linear-gradient(145deg, #F5E8D6 0%, #D4A574 50%, #A0704A 100%)',
    },
    {
      name: 'Custom Celebration Cakes',
      description: m.items.cakes.description,
      price: 'Custom pricing',
      tag: m.items.cakes.tag,
      gradient: 'linear-gradient(145deg, #F9E8F5 0%, #E8C5E0 50%, #D4A0C8 100%)',
    },
  ];

  return (
    <section className="section-padding bg-warm-gradient" aria-labelledby="menu-heading">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header — left aligned, not centered */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-label mb-5">{m.label}</div>
            <h2
              id="menu-heading"
              className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight"
            >
              {m.heading1}{' '}
              <span className="italic text-rose-blush">{m.heading2}</span>
            </h2>
          </div>
          <p className="font-sans text-stone-500 max-w-xs leading-relaxed sm:text-right text-sm">
            {m.body}
          </p>
        </div>

        {/* Featured pair — asymmetric 60/40 split */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
          {FEATURED.map((item, i) => (
            <article
              key={item.name}
              className={`relative overflow-hidden rounded-3xl group cursor-default ${
                i === 0 ? 'lg:col-span-3' : 'lg:col-span-2'
              }`}
            >
              <div className="relative h-56 lg:h-80">
                {item.image ? (
                  <>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" aria-hidden="true" />
                  </>
                ) : (
                  <div className="h-full" style={{ background: item.gradient }} />
                )}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <span className="inline-flex self-start items-center px-3 py-1 mb-3 rounded-full bg-white/20 backdrop-blur-sm font-sans text-xs font-semibold text-white">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white leading-tight mb-1">
                    {item.name}
                  </h3>
                  <p className="font-sans text-sm text-white/80 leading-relaxed line-clamp-2 max-w-sm">
                    {item.description}
                  </p>
                  <div className="mt-3 font-sans text-sm font-semibold text-gold">
                    {item.price}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Remaining items — elegant divide-y list, no cards */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-card divide-y divide-stone-100">
          {LIST_ITEMS.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-5 px-7 py-5 group transition-colors duration-200 hover:bg-stone-100/60"
            >
              {/* Color swatch */}
              <div
                className="w-10 h-10 rounded-xl flex-shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                style={{ background: item.gradient }}
                aria-hidden="true"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-serif text-base font-bold text-stone-900">{item.name}</h3>
                  <span className="hidden sm:inline font-sans text-[11px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-500 font-medium">
                    {item.tag}
                  </span>
                </div>
                <p className="font-sans text-sm text-stone-500 leading-snug line-clamp-1">
                  {item.description}
                </p>
              </div>
              <div className="font-sans text-sm font-semibold text-teal-sage whitespace-nowrap flex-shrink-0">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link href="/menu" className="btn-primary text-base px-10 py-4">
            {m.seeFullMenu}
          </Link>
          <p className="font-sans text-sm text-stone-500">
            {m.customOrders}{' '}
            <a href="tel:7037898919" className="text-rose-blush hover:underline">
              (703) 789-8919
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
