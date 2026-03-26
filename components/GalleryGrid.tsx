import Link from 'next/link';

type GalleryCell = {
  label: string;
  gradient: string;
  span?: string;
};

const GALLERY_CELLS: GalleryCell[] = [
  {
    label: 'Conchas y Pan Dulce',
    gradient: 'linear-gradient(145deg, #F9E3C7 0%, #F0AE70 100%)',
    span: 'col-span-2 row-span-2',
  },
  {
    label: 'Pastelitos frescos',
    gradient: 'linear-gradient(145deg, #FDE8EE 0%, #E88FA3 100%)',
  },
  {
    label: 'Café de Olla',
    gradient: 'linear-gradient(145deg, #F5E8D6 0%, #A0704A 100%)',
  },
  {
    label: 'Pastel de Queso',
    gradient: 'linear-gradient(145deg, #E8F5F4 0%, #5F8F8A 100%)',
  },
  {
    label: 'Empanadas Dulces',
    gradient: 'linear-gradient(145deg, #FFF3D6 0%, #F4C27A 100%)',
    span: 'col-span-2',
  },
  {
    label: 'Tortas de Boda',
    gradient: 'linear-gradient(145deg, #F9E8F5 0%, #D4A0C8 100%)',
  },
  {
    label: 'Quesadilla Salvadoreña',
    gradient: 'linear-gradient(145deg, #FDE8C5 0%, #E8A84A 100%)',
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
              className={`${cell.span ?? ''} rounded-3xl overflow-hidden group cursor-pointer relative`}
              style={{ background: cell.gradient }}
            >
              <div className="h-full flex flex-col items-center justify-center p-4">
                <span className="font-script text-2xl text-white/60 text-center">{cell.label}</span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-all duration-300 rounded-3xl flex items-end p-4 opacity-0 group-hover:opacity-100">
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
