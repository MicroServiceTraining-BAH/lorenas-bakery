'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/menu', label: 'Menu' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-rose-light/20'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group" aria-label="Lorena's Bakery home">
            <span className="font-script text-2xl md:text-3xl text-rose-blush transition-colors duration-200 group-hover:text-rose-400">
              Lorena&apos;s
            </span>
            <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-stone-600 -mt-0.5">
              Bakery
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'font-sans text-sm font-medium tracking-wide transition-colors duration-200 relative group',
                    pathname === href
                      ? 'text-rose-blush'
                      : 'text-stone-700 hover:text-rose-blush'
                  )}
                  aria-current={pathname === href ? 'page' : undefined}
                >
                  {label}
                  <span
                    className={cn(
                      'absolute -bottom-0.5 left-0 h-px bg-rose-blush transition-all duration-300',
                      pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:7039280838"
              className="font-sans text-sm text-stone-600 hover:text-rose-blush transition-colors duration-200"
              aria-label="Call us at (703) 928-0838"
            >
              (703) 928-0838
            </a>
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
              Order Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-rose-pale transition-colors duration-200"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={cn(
                'block w-5 h-0.5 bg-stone-800 rounded-full transition-all duration-300',
                menuOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'block w-5 h-0.5 bg-stone-800 rounded-full transition-all duration-300',
                menuOpen && 'opacity-0 scale-x-0'
              )}
            />
            <span
              className={cn(
                'block w-5 h-0.5 bg-stone-800 rounded-full transition-all duration-300',
                menuOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          'md:hidden fixed inset-0 top-16 bg-white z-40 transition-all duration-400 flex flex-col',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!menuOpen}
      >
        <div className="flex-1 overflow-y-auto px-5 pt-8 pb-10">
          <ul className="flex flex-col gap-1" role="list">
            {NAV_LINKS.map(({ href, label }, i) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'flex items-center justify-between py-4 px-4 rounded-2xl font-serif text-2xl transition-all duration-200',
                    pathname === href
                      ? 'text-rose-blush bg-rose-pale'
                      : 'text-stone-800 hover:text-rose-blush hover:bg-rose-pale/60',
                    menuOpen && 'animate-fade-up',
                  )}
                  style={{ animationDelay: `${i * 60}ms`, opacity: menuOpen ? undefined : 0 }}
                  aria-current={pathname === href ? 'page' : undefined}
                >
                  {label}
                  <span className="text-rose-light text-lg">→</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3">
            <Link href="/contact" className="btn-primary justify-center text-base py-4">
              Order Now
            </Link>
            <a
              href="tel:7039280838"
              className="btn-outline justify-center text-base py-4"
              aria-label="Call us"
            >
              Call (703) 928-0838
            </a>
          </div>

          <p className="mt-8 text-center font-sans text-sm text-stone-500">
            5443 Wellington Rd, Manassas, VA 20110
          </p>
        </div>
      </div>
    </header>
  );
}
