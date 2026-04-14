import type { Metadata } from 'next';
import Link from 'next/link';

import AboutSection from '@/components/AboutSection';
import FaqSection from '@/components/FaqSection';
import GalleryGrid from '@/components/GalleryGrid';
import Hero from '@/components/Hero';
import LocationSection from '@/components/LocationSection';
import MenuPreview from '@/components/MenuPreview';
import TestimonialsSection from '@/components/TestimonialsSection';
import { getBlogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: "Lorena's Bakery | Fresh Pan Dulce & Salvadoran Pastries — Manassas, VA",
  description:
    "Family-owned Salvadoran bakery in Manassas, VA. Fresh-baked pan dulce, conchas, pastelitos, and custom cakes made daily. Serving Northern Virginia since 2010. Visit us at 5443 Wellington Rd.",
  alternates: {
    canonical: 'https://lorenasbakery.com',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What kind of bakery is Lorena's Bakery?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Lorena's Bakery is a family-owned Salvadoran bakery in Manassas, VA, specializing in authentic pan dulce — conchas, quesadilla salvadoreña, pastelitos, empanadas de leche, polvorosas, and more. Everything is baked from scratch every morning using traditional family recipes.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you make custom cakes and celebration orders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Lorena's Bakery creates custom cakes for quinceañeras, weddings, birthdays, and corporate events. Custom orders require at least 72 hours notice. Call (703) 928-0838.",
      },
    },
    {
      '@type': 'Question',
      name: "What are Lorena's Bakery hours and location?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Located at 5443 Wellington Rd, Manassas, VA 20110. Monday–Friday 7:00 AM–7:00 PM, Saturday 6:00 AM–8:00 PM, Sunday 7:00 AM–5:00 PM.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver to Northern Virginia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Lorena's Bakery offers local delivery within Prince William and Fairfax counties for custom orders. Walk-in customers are welcome from across Northern Virginia including Gainesville, Woodbridge, Dale City, Centreville, and Bristow.",
      },
    },
  ],
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function HomePage() {
  const recentPosts = getBlogPosts().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <AboutSection />
      <MenuPreview />
      <GalleryGrid />

      {/* Blog teaser */}
      <section className="section-padding bg-white" aria-labelledby="blog-teaser-heading">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="section-label mb-5">From the Kitchen</div>
              <h2
                id="blog-teaser-heading"
                className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight"
              >
                Stories &amp;{' '}
                <span className="italic text-rose-blush">Baking Guides</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="font-sans text-sm font-semibold text-teal-sage hover:text-teal-700 transition-colors duration-200 flex-shrink-0"
            >
              View all posts →
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <article
                key={post.slug}
                className="card-base overflow-hidden flex flex-col"
                aria-label={post.title}
              >
                <div
                  className="h-40 flex items-center justify-center"
                  style={{ background: post.coverGradient }}
                  role="img"
                  aria-label={`Cover for ${post.title}`}
                >
                  <div className="font-script text-white/60 text-3xl">Lorena&apos;s</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="font-sans text-xs font-semibold px-3 py-1 rounded-full bg-rose-pale text-rose-blush self-start mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-base font-bold text-stone-900 leading-snug mb-2 flex-1">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-rose-blush transition-colors duration-200"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <div className="mt-4 flex items-center justify-between">
                    <time dateTime={post.publishedAt} className="font-sans text-xs text-stone-400">
                      {formatDate(post.publishedAt)}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-sans text-xs font-semibold text-teal-sage hover:text-teal-700 transition-colors duration-200"
                      aria-label={`Read ${post.title}`}
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FaqSection />
      <LocationSection />
    </>
  );
}
