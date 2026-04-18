import type { Metadata } from 'next';

import ContactPageContent from '@/components/ContactPageContent';

export const metadata: Metadata = {
  title: "Contact & Custom Orders — Lorena's Bakery Manassas, VA",
  description:
    "Contact Lorena's Bakery in Manassas, VA to place a custom order, book a celebration cake, or ask about our menu. Call (703) 789-8919 or send a message. We reply within one business day.",
  alternates: {
    canonical: 'https://lorenasbakery.com/contact',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
