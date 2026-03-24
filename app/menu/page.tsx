import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    "Explore Lorena's Bakery full menu — authentic Salvadoran pan dulce, conchas, pastelitos, empanadas, quesadilla salvadoreña, custom cakes, and specialty coffee in Manassas, VA.",
};

type MenuCategory = {
  id: string;
  name: string;
  items: {
    name: string;
    description: string;
    price: string;
    tag?: string;
    emoji: string;
  }[];
};

const MENU: MenuCategory[] = [
  {
    id: 'pan-dulce',
    name: 'Pan Dulce & Sweet Bread',
    items: [
      {
        name: 'Conchas',
        description: 'Classic Mexican sweet bread with a crumbly sugar shell in vanilla, chocolate, or strawberry.',
        price: '$2.50',
        tag: 'Fan Favorite',
        emoji: '🍞',
      },
      {
        name: 'Semitas',
        description: 'Dense, sweet bread made with piloncillo and anise seeds. A traditional Salvadoran staple.',
        price: '$2.75',
        emoji: '🥖',
      },
      {
        name: 'Pan de Yema',
        description: 'Egg-enriched sweet rolls with a golden crust, pillowy interior, and hint of orange zest.',
        price: '$2.50',
        emoji: '🫓',
      },
      {
        name: 'Cuernos',
        description: 'Horn-shaped pastry with a flaky exterior and sweet cream or chocolate filling.',
        price: '$3.00',
        tag: 'New',
        emoji: '🥐',
      },
    ],
  },
  {
    id: 'pastries',
    name: 'Savory & Sweet Pastries',
    items: [
      {
        name: 'Pastelitos de Carne',
        description: 'Flaky hand pies filled with seasoned ground beef, potatoes, and spices. Baked golden.',
        price: '$3.00',
        tag: 'Bestseller',
        emoji: '🥙',
      },
      {
        name: 'Pastelitos de Queso',
        description: 'Hand pies filled with cream cheese and jalapeño. Crispy exterior, melty center.',
        price: '$3.00',
        emoji: '🫔',
      },
      {
        name: 'Empanadas de Leche',
        description: 'Fried dough filled with sweet vanilla custard and rolled in cinnamon sugar.',
        price: '$2.75',
        tag: 'Sweet',
        emoji: '🧁',
      },
      {
        name: 'Empanadas de Loroco',
        description: 'Savory Salvadoran empanadas filled with loroco flower and cheese. Authentically ours.',
        price: '$3.50',
        tag: 'Signature',
        emoji: '🌿',
      },
    ],
  },
  {
    id: 'cakes',
    name: 'Cakes & Specialty Items',
    items: [
      {
        name: 'Quesadilla Salvadoreña',
        description: 'Rice flour cake with parmesan, sesame seeds, and sour cream. Sweet, savory, and spongy.',
        price: '$4.00',
        tag: 'Must Try',
        emoji: '🍰',
      },
      {
        name: 'Tres Leches Cake',
        description: 'Classic tres leches soaked in three milks with fresh whipped cream and cinnamon topping.',
        price: 'from $28 (6")',
        emoji: '🎂',
      },
      {
        name: 'Quinceañera Cakes',
        description: 'Custom tiered cakes designed for your special day. Consult with Lorena for your vision.',
        price: 'Custom pricing',
        tag: 'Custom Order',
        emoji: '👑',
      },
      {
        name: 'Birthday Cakes',
        description: 'Fully custom cakes in your choice of flavor, filling, and decoration. Order 72hrs in advance.',
        price: 'from $45',
        emoji: '🎉',
      },
    ],
  },
  {
    id: 'drinks',
    name: 'Coffee & Drinks',
    items: [
      {
        name: 'Café de Olla',
        description: 'Traditional Mexican coffee brewed with cinnamon and piloncillo in a clay pot.',
        price: '$3.00',
        tag: 'Morning Must',
        emoji: '☕',
      },
      {
        name: 'Horchata de Morro',
        description: 'Authentic Salvadoran horchata made with morro seeds, cinnamon, and sesame. Refreshingly different.',
        price: '$4.00',
        tag: 'Signature',
        emoji: '🥛',
      },
      {
        name: 'Atol de Elote',
        description: 'Sweet corn drink made the traditional way — warm, thick, and utterly comforting.',
        price: '$3.50',
        emoji: '🌽',
      },
      {
        name: 'Fresh Licuados',
        description: 'Blended fresh fruit drinks with milk or water. Ask about today\'s seasonal fruits.',
        price: 'from $4.00',
        emoji: '🍓',
      },
    ],
  },
];

export default function MenuPage() {
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
            {MENU.map((category) => (
              <div key={category.id} id={category.id}>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-8 pb-4 border-b border-stone-100">
                  {category.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {category.items.map((item) => (
                    <article
                      key={item.name}
                      className="flex items-start gap-5 p-6 rounded-2xl bg-cream hover:bg-rose-pale/40 transition-colors duration-200"
                    >
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
          <h2 id="menu-cta-heading" className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
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
