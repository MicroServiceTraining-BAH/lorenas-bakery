import type { Metadata } from 'next';

import MenuPageContent from '@/components/MenuPageContent';
import { DEFAULTS } from '@/lib/defaults';
import type { MenuData } from '@/types/cms';

export const metadata: Metadata = {
  title: "Menu — Pan Dulce, Pastries & Custom Cakes in Manassas, VA",
  description:
    "Full menu at Lorena's Bakery — fresh conchas, quesadilla salvadoreña, pastelitos, empanadas de leche, café de olla, and custom celebration cakes. Made from scratch daily in Manassas, VA.",
  alternates: {
    canonical: 'https://lorenasbakery.com/menu',
  },
};

export default function MenuPage() {
  const { categories } = DEFAULTS.menu as MenuData;
  return <MenuPageContent categories={categories} />;
}
