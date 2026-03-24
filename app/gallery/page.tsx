import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    "See what's fresh at Lorena's Bakery — photos of our Salvadoran pan dulce, pastries, cakes, and coffee in Manassas, VA.",
};

type GalleryItem = {
  label: string;
  caption: string;
  emoji: string;
  gradient: string;
  span?: string;
};

const GALLERY: GalleryItem[] = [
  {
    label: 'Pan Dulce Variety',
    caption: 'Conchas, cuernos, and semitas — baked fresh every morning',
    emoji: '🍞',
    gradient: 'linear-gradient(145deg, #F9E3C7 0%, #F5C99A 50%, #F0AE70 100%)',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    label: 'Pastelitos',
    caption: 'Golden flaky hand pies, sweet and savory',
    emoji: '🥐',
    gradient: 'linear-gradient(145deg, #FDE8EE 0%, #F5C5D0 60%, #E88FA3 100%)',
  },
  {
    label: 'Café de Olla',
    caption: 'Brewed with cinnamon and piloncillo',
    emoji: '☕',
    gradient: 'linear-gradient(145deg, #F5E8D6 0%, #C49A72 60%, #8B5E3C 100%)',
  },
  {
    label: 'Tres Leches',
    caption: 'Soaked in three milks, topped with cream',
    emoji: '🍰',
    gradient: 'linear-gradient(145deg, #E8F5F4 0%, #A8C5C2 60%, #5F8F8A 100%)',
  },
  {
    label: 'Empanadas Dulces',
    caption: 'Fried custard empanadas rolled in cinnamon sugar',
    emoji: '🧁',
    gradient: 'linear-gradient(145deg, #FFF3D6 0%, #FAE4B8 50%, #F4C27A 100%)',
    span: 'sm:col-span-2',
  },
  {
    label: 'Quinceañera Cake',
    caption: 'Custom tiered cakes for your special day',
    emoji: '👑',
    gradient: 'linear-gradient(145deg, #F9E8F5 0%, #E8C5E0 60%, #C8A0D8 100%)',
  },
  {
    label: 'Horchata de Morro',
    caption: 'Authentic Salvadoran horchata — unlike anything else',
    emoji: '🥛',
    gradient: 'linear-gradient(145deg, #EDF8F7 0%, #C5E5E2 60%, #8FC0BC 100%)',
  },
  {
    label: 'Quesadilla Salvadoreña',
    caption: 'Rice flour cake with parmesan and sesame seeds',
    emoji: '🍮',
    gradient: 'linear-gradient(145deg, #FDE8C5 0%, #F5C078 60%, #E8A84A 100%)',
    span: 'sm:col-span-2',
  },
  {
    label: 'Atol de Elote',
    caption: 'Traditional warm corn drink — the taste of home',
    emoji: '🌽',
    gradient: 'linear-gradient(145deg, #FDEEC5 0%, #F5D478 60%, #D4A830 100%)',
  },
  {
    label: 'Birthday Cakes',
    caption: 'Custom decorated for any celebration',
    emoji: '🎂',
    gradient: 'linear-gradient(145deg, #F9E8EE 0%, #F0B8C8 60%, #E88FA3 100%)',
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #FFF6F8 0%, #FDE8EE 50%, #E8F5F4 100%)' }}
        aria-label="Gallery page header"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-rose-light/25 blur-3xl" />
          <div className="absolute bottom-0 -left-12 w-56 h-56 rounded-full bg-teal-pale blur-2xl" />
        </div>
        <div className="relative max-w-7xl mx-auto container-padding text-center">
          <div className="section-label justify-center mb-6">Photo Gallery</div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-stone-900 leading-tight">
            Made with <span className="italic text-rose-blush">Heart</span>
          </h1>
          <p className="mt-6 font-sans text-lg text-stone-600 max-w-xl mx-auto leading-relaxed">
            A glimpse into what comes out of our kitchen every day. Follow us{' '}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-blush font-medium hover:underline"
              aria-label="Follow Lorena's Bakery on Instagram"
            >
              @lorenasbakery
            </a>{' '}
            for daily updates.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white" aria-label="Bakery photo gallery">
        <div className="max-w-7xl mx-auto container-padding">
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            style={{ gridAutoRows: '200px' }}
            role="list"
            aria-label="Gallery of Lorena's Bakery baked goods"
          >
            {GALLERY.map((item) => (
              <figure
                key={item.label}
                role="listitem"
                className={`${item.span ?? ''} rounded-3xl overflow-hidden group cursor-pointer relative`}
                style={{ background: item.gradient }}
              >
                <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                  <span
                    className="text-5xl md:text-6xl mb-3 transition-transform duration-500 group-hover:scale-110 inline-block"
                    aria-hidden="true"
                  >
                    {item.emoji}
                  </span>
                </div>
                {/* Hover caption */}
                <figcaption className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-all duration-300 rounded-3xl flex flex-col items-center justify-end p-5 opacity-0 group-hover:opacity-100">
                  <p className="font-serif text-base font-bold text-white drop-shadow text-center">
                    {item.label}
                  </p>
                  <p className="font-sans text-xs text-white/80 drop-shadow text-center mt-1">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-warm-gradient" aria-labelledby="gallery-cta-heading">
        <div className="max-w-3xl mx-auto container-padding text-center">
          <div className="w-16 h-16 rounded-2xl bg-rose-blush/10 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#E88FA3" strokeWidth="2" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="#E88FA3" strokeWidth="2" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#E88FA3" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h2 id="gallery-cta-heading" className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
            Follow Our{' '}
            <span className="italic text-rose-blush">Daily Bakes</span>
          </h2>
          <p className="mt-5 font-sans text-stone-600 leading-relaxed text-lg max-w-lg mx-auto">
            We post fresh content every day — new pastries, seasonal specials, behind-the-scenes
            moments, and more.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
              aria-label="Follow Lorena's Bakery on Instagram"
            >
              Follow on Instagram
            </a>
            <Link href="/contact" className="btn-outline text-base px-8 py-4">
              Place a Custom Order
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
