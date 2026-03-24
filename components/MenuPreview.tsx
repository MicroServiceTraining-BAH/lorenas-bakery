import Link from 'next/link';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag: string;
  gradient: string;
  emoji: string;
};

const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Conchas',
    description:
      'Our signature sweet bread with a crumbly sugar shell — available in vanilla, chocolate, and strawberry. A Salvadoran classic you have to try.',
    price: 'from $2.50',
    tag: 'Fan Favorite',
    gradient: 'linear-gradient(145deg, #F9E3C7 0%, #F5C99A 50%, #F0AE70 100%)',
    emoji: '🍞',
  },
  {
    name: 'Pastelitos',
    description:
      'Flaky hand pies filled with savory ground beef & potatoes or sweet cream cheese. Baked golden and served warm — a crowd-pleaser at every table.',
    price: 'from $3.00',
    tag: 'Bestseller',
    gradient: 'linear-gradient(145deg, #FDE8EE 0%, #F5C5D0 50%, #E88FA3 100%)',
    emoji: '🥐',
  },
  {
    name: 'Quesadilla Salvadoreña',
    description:
      'Not the Mexican tortilla kind — this is a rich, spongy cake made with rice flour, parmesan, and sesame seeds. Sweet, savory, and completely addictive.',
    price: 'from $3.50',
    tag: 'Signature',
    gradient: 'linear-gradient(145deg, #E8F5F4 0%, #A8C5C2 50%, #5F8F8A 100%)',
    emoji: '🍰',
  },
  {
    name: 'Empanadas de Leche',
    description:
      'Crispy fried dough filled with sweet vanilla custard and rolled in cinnamon sugar. A dessert that disappears faster than we can make them.',
    price: 'from $2.75',
    tag: 'Sweet Pick',
    gradient: 'linear-gradient(145deg, #FFF3D6 0%, #FAE4B8 50%, #F4C27A 100%)',
    emoji: '🧁',
  },
  {
    name: 'Café de Olla',
    description:
      'Mexican-style brewed coffee with cinnamon and piloncillo. Rich, aromatic, and made fresh to order. The perfect companion for your morning pastry.',
    price: 'from $3.00',
    tag: 'Morning Must',
    gradient: 'linear-gradient(145deg, #F5E8D6 0%, #D4A574 50%, #A0704A 100%)',
    emoji: '☕',
  },
  {
    name: 'Custom Celebration Cakes',
    description:
      'Let us make your special day unforgettable. Tiered cakes, quinceañera cakes, birthdays, and more — all designed and baked to order with your vision in mind.',
    price: 'Custom pricing',
    tag: 'Special Order',
    gradient: 'linear-gradient(145deg, #F9E8F5 0%, #E8C5E0 50%, #D4A0C8 100%)',
    emoji: '🎂',
  },
];

export default function MenuPreview() {
  return (
    <section
      className="section-padding bg-warm-gradient"
      aria-labelledby="menu-heading"
    >
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label justify-center mb-5">Fresh Daily</div>
          <h2
            id="menu-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight"
          >
            Baked with{' '}
            <span className="italic text-rose-blush">Tradition</span>
          </h2>
          <p className="mt-4 font-sans text-stone-600 leading-relaxed">
            Every item on our menu is made fresh daily using authentic Salvadoran recipes.
            Come early — our bestsellers sell out fast.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENU_ITEMS.map((item) => (
            <article
              key={item.name}
              className="card-base overflow-hidden group"
            >
              {/* Card image area */}
              <div
                className="relative h-48 flex items-center justify-center overflow-hidden"
                style={{ background: item.gradient }}
                role="img"
                aria-label={`${item.name} — freshly baked`}
              >
                <span
                  className="text-6xl transition-transform duration-500 group-hover:scale-110"
                  aria-hidden="true"
                >
                  {item.emoji}
                </span>
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
            See Full Menu
          </Link>
          <p className="mt-4 font-sans text-sm text-stone-500">
            Custom orders welcome · Call{' '}
            <a href="tel:7039280838" className="text-rose-blush hover:underline">
              (703) 928-0838
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
