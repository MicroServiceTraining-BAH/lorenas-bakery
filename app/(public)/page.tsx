import type { Metadata } from 'next';

import AboutSection from '@/components/AboutSection';
import FaqSection from '@/components/FaqSection';
import FoodShowcase from '@/components/FoodShowcase';
import GalleryGrid from '@/components/GalleryGrid';
import Hero from '@/components/Hero';
import LocationSection from '@/components/LocationSection';
import MenuPreview from '@/components/MenuPreview';
import TestimonialsSection from '@/components/TestimonialsSection';

export const metadata: Metadata = {
  title: "Lorena's Bakery | Fresh Pan Dulce & Salvadoran Pastries — Manassas, VA",
  description:
    "Family-owned Salvadoran bakery in Manassas, VA. Fresh-baked pan dulce, conchas, pastelitos, and custom cakes made daily. Serving Northern Virginia since 2026. Visit us at 10750 Sudley Manor Dr.",
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
        text: "Yes. Lorena's Bakery creates custom cakes for quinceañeras, weddings, birthdays, and corporate events. Custom orders require at least 72 hours notice. Call (703) 789-8919.",
      },
    },
    {
      '@type': 'Question',
      name: "What are Lorena's Bakery hours and location?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Located at 10750 Sudley Manor Dr, Manassas, VA 20109. Monday–Friday 6:30 AM–8:00 PM, Saturday 8:00 AM–8:00 PM, Sunday 8:00 AM–7:00 PM.",
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <FoodShowcase />
      <AboutSection />
      <MenuPreview />
      <GalleryGrid />

      <TestimonialsSection />
      <FaqSection />
      <LocationSection />
    </>
  );
}
