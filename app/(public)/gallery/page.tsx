import type { Metadata } from 'next';

import GalleryPageContent from '@/components/GalleryPageContent';

export const metadata: Metadata = {
  title: "Photo Gallery — Fresh Pan Dulce & Pastries at Lorena's Bakery",
  description:
    "See what comes out of our kitchen every day — photos of fresh pan dulce, conchas, fruit tarts, custom cakes, and pastries from Lorena's Bakery in Manassas, VA.",
  alternates: {
    canonical: 'https://lorenasbakery.com/gallery',
  },
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
