import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans, Dancing_Script } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: {
    default: "Lorena's Bakery | Fresh Pan Dulce & Pastries in Manassas, VA",
    template: "%s | Lorena's Bakery",
  },
  description:
    "Family-owned Salvadoran bakery in Manassas, VA. Fresh pan dulce, pastries, cakes, and coffee made daily. Authentic flavors, warm community. Order online or visit us today.",
  keywords: [
    'bakery Manassas VA',
    'Salvadoran bakery Virginia',
    'pan dulce Manassas',
    'fresh pastries near me',
    'Latin bakery Northern Virginia',
    'conchas Manassas',
    'fresh bread Manassas',
    "Lorena's Bakery",
    'family bakery Virginia',
  ],
  authors: [{ name: "Lorena's Bakery" }],
  creator: "Lorena's Bakery",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lorenasbakery.com',
    siteName: "Lorena's Bakery",
    title: "Lorena's Bakery | Fresh Pan Dulce & Pastries in Manassas, VA",
    description:
      'Family-owned Salvadoran bakery in Manassas, VA. Fresh pan dulce, pastries, and coffee made daily.',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lorena's Bakery",
    description: 'Fresh pan dulce & pastries in Manassas, VA.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${dancing.variable}`}>
      <body className="bg-cream font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
