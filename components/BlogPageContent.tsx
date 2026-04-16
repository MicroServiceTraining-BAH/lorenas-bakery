'use client';

import Link from 'next/link';

import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/lib/language-context';
import type { BlogPost } from '@/data/blog';

type Props = { posts: BlogPost[] };

function formatDate(dateStr: string, lang: string) {
  return new Date(dateStr).toLocaleDateString(lang === 'es' ? 'es-US' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPageContent({ posts }: Props) {
  const { t, lang } = useLanguage();
  const pg = t.blogPage;

  return (
    <>
      <Breadcrumb items={[{ label: t.nav.blog, href: '/blog' }]} />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #FFF6F8 0%, #FFF3E8 60%, #EDF5F4 100%)' }}
        aria-label="Blog page header"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-rose-light/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-teal-pale blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto container-padding text-center">
          <div className="section-label justify-center mb-6">{pg.hero.label}</div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-stone-900 leading-tight">
            {pg.hero.heading.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="italic text-rose-blush">{pg.hero.heading.split(' ').slice(-1)[0]}</span>
          </h1>
          <p className="mt-6 font-sans text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {pg.hero.body}
          </p>
        </div>
      </section>

      {/* Blog posts */}
      <section className="section-padding bg-white" aria-label="Blog post list">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="card-base overflow-hidden flex flex-col"
                aria-label={post.title}
              >
                <div
                  className="h-48 flex items-center justify-center"
                  style={{ background: post.coverGradient }}
                  role="img"
                  aria-label={`Cover image for ${post.title}`}
                >
                  <div className="font-script text-white/60 text-4xl">Lorena&apos;s</div>
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-sans text-xs font-semibold px-3 py-1 rounded-full bg-rose-pale text-rose-blush">
                      {post.category}
                    </span>
                    <span className="font-sans text-xs text-stone-400">{post.readingTime}</span>
                  </div>

                  <h2 className="font-serif text-xl font-bold text-stone-900 leading-snug mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-rose-blush transition-colors duration-200"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="font-sans text-sm text-stone-600 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <time dateTime={post.publishedAt} className="font-sans text-xs text-stone-400">
                      {formatDate(post.publishedAt, lang)}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-sans text-sm font-semibold text-teal-sage hover:text-teal-700 transition-colors duration-200"
                      aria-label={`Read more about ${post.title}`}
                    >
                      {pg.readMore}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-warm-gradient" aria-labelledby="blog-cta-heading">
        <div className="max-w-3xl mx-auto container-padding text-center">
          <h2
            id="blog-cta-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-stone-900 leading-tight"
          >
            {pg.cta.heading}{' '}
            <span className="italic text-rose-blush">{pg.cta.headingEmphasis}</span>
          </h2>
          <p className="mt-5 font-sans text-stone-600 text-lg leading-relaxed max-w-xl mx-auto">
            {pg.cta.body}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/menu" className="btn-primary text-base px-8 py-4">
              {pg.cta.viewMenu}
            </Link>
            <Link href="/contact" className="btn-outline text-base px-8 py-4">
              {pg.cta.placeOrder}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
