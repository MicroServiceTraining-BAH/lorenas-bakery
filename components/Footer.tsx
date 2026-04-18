'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const nav = t.nav;

  const NAV_LINKS = [
    { href: '/', label: nav.home },
    { href: '/about', label: nav.about },
    { href: '/menu', label: nav.menu },
    { href: '/services', label: nav.services },
    { href: '/gallery', label: nav.gallery },
    { href: '/contact', label: nav.contact },
  ];

  return (
    <footer className="bg-stone-950 text-white" aria-label="Footer">
      {/* Upper footer */}
      <div className="max-w-7xl mx-auto container-padding pt-16 pb-10">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex mb-4" aria-label="Lorena's Bakery home">
              <Image
                src="/lorenas-logo.jpg"
                alt="Lorena's Bakery"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover"
              />
            </Link>
            <p className="font-sans text-sm text-stone-400 leading-relaxed max-w-xs mt-4">
              {f.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/lorenasbakery.us/"
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
              {f.navigation}
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
              {f.visitUs}
            </h3>
            <dl className="space-y-4">
              <div>
                <dt className="sr-only">Address</dt>
                <dd className="font-sans text-sm text-stone-300 leading-relaxed">
                  10750 Sudley Manor Dr<br />
                  Manassas, VA 20109
                </dd>
              </div>
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>
                  <a
                    href="tel:7037898919"
                    className="font-sans text-sm text-stone-300 hover:text-rose-blush transition-colors duration-200"
                    aria-label="Call us at (703) 789-8919"
                  >
                    (703) 789-8919
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
                <dt className="font-sans text-xs text-stone-500 mb-1">{f.hours}</dt>
                <dd className="font-sans text-sm text-stone-300 whitespace-pre-line">
                  {f.hoursValue}
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
          © {new Date().getFullYear()} Lorena&apos;s Bakery · Manassas, VA · {f.rights}
        </p>
        <p className="font-sans text-xs text-stone-500">
          {f.websiteBy}{' '}
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
