import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Breadcrumb from '@/components/Breadcrumb';
import { getBlogPost, getBlogPosts, type BlogSection } from '@/data/blog';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://lorenasbakery.com/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `https://lorenasbakery.com/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: ["Lorena's Bakery"],
      tags: ['Salvadoran bakery', 'pan dulce', 'Manassas VA', post.category],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case 'h2':
      return (
        <h2
          key={index}
          className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mt-10 mb-4 leading-snug"
        >
          {section.text}
        </h2>
      );
    case 'h3':
      return (
        <h3
          key={index}
          className="font-serif text-xl font-bold text-stone-800 mt-8 mb-3 leading-snug"
        >
          {section.text}
        </h3>
      );
    case 'p':
      return (
        <p key={index} className="font-sans text-stone-600 leading-relaxed text-base mb-5">
          {section.text}
        </p>
      );
    case 'ul':
      return (
        <ul key={index} className="list-disc list-outside ml-5 space-y-2 mb-5">
          {section.items?.map((item, i) => (
            <li key={i} className="font-sans text-stone-600 leading-relaxed text-base">
              {item}
            </li>
          ))}
        </ul>
      );
    case 'cta':
      return (
        <div
          key={index}
          className="mt-10 mb-5 bg-rose-pale rounded-3xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <p className="font-serif text-xl font-bold text-stone-900">
            Ready to try it for yourself?
          </p>
          <Link href={section.ctaHref ?? '/menu'} className="btn-primary flex-shrink-0">
            {section.ctaLabel ?? 'View Menu'}
          </Link>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const allPosts = getBlogPosts().filter((p) => p.slug !== slug);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: "Lorena's Bakery",
      url: 'https://lorenasbakery.com',
    },
    publisher: {
      '@type': 'Organization',
      name: "Lorena's Bakery",
      logo: {
        '@type': 'ImageObject',
        url: 'https://lorenasbakery.com/lorenas-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://lorenasbakery.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
        style={{ background: post.coverGradient }}
        aria-label="Blog post header"
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto container-padding text-center">
          <div className="section-label justify-center mb-6">{post.category}</div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 leading-[1.1]">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center justify-center gap-4 font-sans text-sm text-stone-500">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
            <span aria-hidden="true">·</span>
            <span>By Lorena&apos;s Bakery</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="section-padding bg-white" aria-label={post.title}>
        <div className="max-w-2xl mx-auto container-padding">
          <p className="font-sans text-lg text-stone-700 leading-relaxed border-l-4 border-rose-blush pl-5 mb-8 italic">
            {post.excerpt}
          </p>
          {post.content.map((section, i) => renderSection(section, i))}
        </div>
      </article>

      {/* Back to blog + Related */}
      <section className="section-padding bg-warm-gradient" aria-labelledby="related-heading">
        <div className="max-w-7xl mx-auto container-padding">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-teal-sage hover:text-teal-700 transition-colors duration-200 mb-12"
          >
            ← Back to all posts
          </Link>

          {allPosts.length > 0 && (
            <>
              <h2
                id="related-heading"
                className="font-serif text-3xl font-bold text-stone-900 mb-8"
              >
                More from the <span className="italic text-rose-blush">blog</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {allPosts.slice(0, 2).map((related) => (
                  <article key={related.slug} className="card-base overflow-hidden flex flex-col">
                    <div
                      className="h-36 flex items-center justify-center"
                      style={{ background: related.coverGradient }}
                      role="img"
                      aria-label={`Cover for ${related.title}`}
                    >
                      <div className="font-script text-white/60 text-3xl">Lorena&apos;s</div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="font-sans text-xs font-semibold px-3 py-1 rounded-full bg-rose-pale text-rose-blush self-start mb-3">
                        {related.category}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug mb-2">
                        <Link
                          href={`/blog/${related.slug}`}
                          className="hover:text-rose-blush transition-colors duration-200"
                        >
                          {related.title}
                        </Link>
                      </h3>
                      <p className="font-sans text-sm text-stone-500 leading-relaxed flex-1">
                        {related.excerpt}
                      </p>
                      <Link
                        href={`/blog/${related.slug}`}
                        className="mt-4 font-sans text-sm font-semibold text-teal-sage hover:text-teal-700 transition-colors duration-200"
                        aria-label={`Read ${related.title}`}
                      >
                        Read more →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
