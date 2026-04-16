import type { Metadata } from 'next';

import BlogPageContent from '@/components/BlogPageContent';
import { getBlogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: "Baking Tips, Recipes & Stories from Lorena's Kitchen",
  description:
    "Read stories, baking guides, and behind-the-scenes posts from Lorena's Bakery in Manassas, VA. Learn about Salvadoran pan dulce, custom cakes, and our family's baking traditions.",
  alternates: {
    canonical: 'https://lorenasbakery.com/blog',
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();
  return <BlogPageContent posts={posts} />;
}
