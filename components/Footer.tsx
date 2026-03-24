import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/menu', label: 'Menu' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white" aria-label="Footer">
      {/* Upper footer */}
      <div className="max-w-7xl mx-auto container-padding pt-16 pb-10">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex flex-col leading-none mb-4" aria-label="Lorena's Bakery home">
              <span className="font-script text-3xl text-rose-blush">Lorena&apos;s</span>
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone-400 -mt-0.5">Bakery</span>
            </Link>
            <p className="font-sans text-sm text-stone-400 leading-relaxed max-w-xs mt-4">
              Authentic Salvadoran pan dulce, pastries, and coffee — baked fresh daily in
              Manassas, Virginia. Family-owned since 2010.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-rose-blush flex items-center justify-center transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="2" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-rose-blush flex items-center justify-center transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-stone-400 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-sm text-stone-300 hover:text-rose-blush transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-stone-400 mb-6">
              Visit Us
            </h3>
            <dl className="space-y-4">
              <div>
                <dt className="sr-only">Address</dt>
                <dd className="font-sans text-sm text-stone-300 leading-relaxed">
                  5443 Wellington Rd<br />
                  Manassas, VA 20110
                </dd>
              </div>
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>
                  <a
                    href="tel:7039280838"
                    className="font-sans text-sm text-stone-300 hover:text-rose-blush transition-colors duration-200"
                    aria-label="Call us at (703) 928-0838"
                  >
                    (703) 928-0838
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href="mailto:contact@lorenasbakery.com"
                    className="font-sans text-sm text-stone-300 hover:text-rose-blush transition-colors duration-200"
                    aria-label="Email contact@lorenasbakery.com"
                  >
                    contact@lorenasbakery.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-sans text-xs text-stone-500 mb-1">Hours</dt>
                <dd className="font-sans text-sm text-stone-300">
                  Mon – Fri: 7am – 7pm<br />
                  Sat: 6am – 8pm · Sun: 7am – 5pm
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto container-padding">
        <div className="h-px bg-stone-800" aria-hidden="true" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto container-padding py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-sans text-xs text-stone-500">
          © {new Date().getFullYear()} Lorena&apos;s Bakery · Manassas, VA · All rights reserved.
        </p>
        <p className="font-sans text-xs text-stone-500">
          Website by{' '}
          <a
            href="https://lvluplocal.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-rose-blush transition-colors duration-200 font-medium"
            aria-label="Website made by Level Up Local"
          >
            Level Up Local
          </a>
        </p>
      </div>
    </footer>
  );
}
