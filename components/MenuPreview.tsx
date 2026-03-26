'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag: string;
  gradient: string;
};

export default function MenuPreview() {
  const { t } = useLanguage();
  const m = t.menu;

  const MENU_ITEMS: MenuItem[] = [
    {
      name: 'Conchas',
      description: m.items.conchas.description,
      price: 'from $2.50',
      tag: m.items.conchas.tag,
      gradient: 'linear-gradient(145deg, #F9E3C7 0%, #F5C99A 50%, #F0AE70 100%)',
    },
    {
      name: 'Pastelitos',
      description: m.items.pastelitos.description,
      price: 'from $3.00',
      tag: m.items.pastelitos.tag,
      gradient: 'linear-gradient(145deg, #FDE8EE 0%, #F5C5D0 50%, #E88FA3 100%)',
    },
    {
      name: 'Quesadilla Salvadoreña',
      description: m.items.quesadilla.description,
      price: 'from $3.50',
      tag: m.items.quesadilla.tag,
      gradient: 'linear-gradient(145deg, #E8F5F4 0%, #A8C5C2 50%, #5F8F8A 100%)',
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
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label justify-center mb-5">{m.label}</div>
          <h2
            id="menu-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight"
          >
            {m.heading1}{' '}
            <span className="italic text-rose-blush">{m.heading2}</span>
          </h2>
          <p className="mt-4 font-sans text-stone-600 leading-relaxed">{m.body}</p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENU_ITEMS.map((item) => (
            <article key={item.name} className="card-base overflow-hidden group">
              {/* Card image area */}
              <div
                className="relative h-48 flex items-center justify-center overflow-hidden"
                style={{ background: item.gradient }}
                role="img"
                aria-label={`${item.name} — freshly baked`}
              >
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm font-sans text-xs font-semibold text-stone-700">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-serif text-xl font-bold text-stone-900">{item.name}</h3>
                  <span className="font-sans text-sm font-semibold text-teal-sage whitespace-nowrap flex-shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="font-sans text-sm text-stone-600 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/menu" className="btn-primary text-base px-10 py-4">
            {m.seeFullMenu}
          </Link>
          <p className="mt-4 font-sans text-sm text-stone-500">
            {m.customOrders}{' '}
            <a href="tel:7039280838" className="text-rose-blush hover:underline">
              (703) 928-0838
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
