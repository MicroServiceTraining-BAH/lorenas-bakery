import Image from 'next/image';
import Link from 'next/link';

type GalleryCell = {
  label: string;
  src: string;
  span?: string;
};

const GALLERY_CELLS: GalleryCell[] = [
  {
    label: 'Pan Dulce & Pastries',
    src: '/bakery-full.jpg',
    span: 'col-span-2 row-span-2',
  },
  {
    label: 'Fruit Tarts',
    src: '/fruit-tarts-closeup.jpg',
  },
  {
    label: 'Fresh Display',
    src: '/bakery-display.jpg',
  },
  {
    label: 'Conchas & Cookies',
    src: '/conchas-display.jpg',
    span: 'col-span-2',
  },
  {
    label: 'Fruit Tarts & Desserts',
    src: '/fruit-tarts-case.jpg',
  },
];

export default function GalleryGrid() {
  return (
    <section className="section-padding bg-white" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-label mb-4">Instagram Gallery</div>
            <h2
              id="gallery-heading"
              className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight"
            >
              Made with{' '}
              <span className="italic text-rose-blush">Heart</span>
            </h2>
          </div>
          <p className="font-sans text-stone-600 max-w-xs leading-relaxed sm:text-right">
            Every piece tells a story. Follow us{' '}
            <a
              href="https://www.instagram.com/lorenasbakery.us/"
              className="text-rose-blush font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Lorena's Bakery on Instagram"
            >
              @lorenasbakery.us
            </a>{' '}
            for daily bakes and specials.
          </p>
        </div>

        {/* Gallery grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          style={{ gridAutoRows: '180px' }}
          role="list"
          aria-label="Photo gallery of our baked goods"
        >
          {GALLERY_CELLS.map((cell) => (
            <div
              key={cell.label}
              role="listitem"
              className={`${cell.span ?? ''} rounded-3xl overflow-hidden group cursor-pointer relative bg-stone-100`}
            >
              <Image
                src={cell.src}
                alt={cell.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-300 rounded-3xl flex items-end p-4 opacity-0 group-hover:opacity-100">
                <span className="font-sans text-sm font-semibold text-white drop-shadow">
                  {cell.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link href="/gallery" className="btn-outline text-sm px-8 py-3">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
