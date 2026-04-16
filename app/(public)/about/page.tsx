import type { Metadata } from 'next';

import AboutPageContent from '@/components/AboutPageContent';

export const metadata: Metadata = {
  title: "About Lorena's Bakery — Salvadoran Family Bakery in Manassas, VA",
  description:
    "Meet Lorena, Miguel, and Sofia — the family behind Lorena's Bakery in Manassas, VA. Authentic Salvadoran recipes, real ingredients, and 15+ years serving Northern Virginia. Open daily.",
  alternates: {
    canonical: 'https://lorenasbakery.com/about',
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
