import type { Metadata } from 'next';

import ServicesPageContent from '@/components/ServicesPageContent';

export const metadata: Metadata = {
  title: "Custom Cakes, Catering & Bakery Services in Manassas, VA",
  description:
    "Lorena's Bakery offers custom celebration cakes, quinceañera pastries, catering trays, and bulk pan dulce orders in Manassas, VA. Serving Northern Virginia since 2026. Request a quote today.",
  alternates: {
    canonical: 'https://lorenasbakery.com/services',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Lorena's Bakery Services",
  description: 'Custom cakes, catering, and bakery services in Manassas, VA',
  url: 'https://lorenasbakery.com/services',
  itemListElement: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'Custom Celebration Cakes', provider: { '@type': 'Bakery', name: "Lorena's Bakery", url: 'https://lorenasbakery.com' } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'Catering & Event Trays', provider: { '@type': 'Bakery', name: "Lorena's Bakery", url: 'https://lorenasbakery.com' } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'Custom Pan Dulce Orders', provider: { '@type': 'Bakery', name: "Lorena's Bakery", url: 'https://lorenasbakery.com' } } },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicesPageContent />
    </>
  );
}
