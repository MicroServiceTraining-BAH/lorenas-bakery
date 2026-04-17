import type { Metadata } from 'next';
import { Playfair_Display, Outfit, Dancing_Script } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: {
    default: "Lorena's Bakery | Fresh Pan Dulce & Salvadoran Pastries in Manassas, VA",
    template: "%s | Lorena's Bakery — Manassas, VA",
  },
  description:
    "Family-owned Salvadoran bakery in Manassas, VA. Fresh-baked pan dulce, conchas, pastelitos, empanadas, and custom cakes made daily. Authentic flavors, warm community. Serving Northern Virginia since 2026.",
  keywords: [
    'bakery Manassas VA',
    'Salvadoran bakery Virginia',
    'pan dulce Manassas',
    'conchas Manassas VA',
    'Latin bakery Northern Virginia',
    'fresh pastries Manassas',
    'Salvadoran food Manassas',
    'custom cakes Manassas',
    'pastelitos Northern Virginia',
    "Lorena's Bakery",
    'family bakery Virginia',
    'pan dulce Northern Virginia',
    'quesadilla salvadoreña Virginia',
  ],
  authors: [{ name: "Lorena's Bakery" }],
  creator: "Lorena's Bakery",
  metadataBase: new URL('https://lorenasbakery.com'),
  alternates: {
    canonical: 'https://lorenasbakery.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lorenasbakery.com',
    siteName: "Lorena's Bakery",
    title: "Lorena's Bakery | Fresh Pan Dulce & Salvadoran Pastries in Manassas, VA",
    description:
      "Family-owned Salvadoran bakery in Manassas, VA. Authentic pan dulce, pastries, and custom cakes made fresh daily. Serving the Northern Virginia community since 2026.",
    images: [
      {
        url: '/bakery-full.jpg',
        width: 1200,
        height: 630,
        alt: "Lorena's Bakery display case filled with fresh pan dulce and pastries",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lorena's Bakery — Authentic Salvadoran Pastries in Manassas, VA",
    description:
      'Fresh pan dulce, conchas, pastelitos & custom cakes. Family-owned since 2026. Open daily in Manassas, VA.',
    images: ['/bakery-full.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  '@id': 'https://lorenasbakery.com/#business',
  name: "Lorena's Bakery",
  description:
    "Family-owned Salvadoran bakery in Manassas, VA specializing in fresh pan dulce, conchas, pastelitos, empanadas de leche, quesadilla salvadoreña, and custom celebration cakes.",
  url: 'https://lorenasbakery.com',
  telephone: '+17039280838',
  email: 'contact@lorenasbakery.com',
  image: 'https://lorenasbakery.com/bakery-full.jpg',
  logo: 'https://lorenasbakery.com/lorenas-logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5443 Wellington Rd',
    addressLocality: 'Manassas',
    addressRegion: 'VA',
    postalCode: '20110',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.7509,
    longitude: -77.4759,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '06:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '07:00',
      closes: '17:00',
    },
  ],
  servesCuisine: ['Salvadoran', 'Latin American', 'Bakery'],
  priceRange: '$',
  paymentAccepted: 'Cash, Credit Card',
  currenciesAccepted: 'USD',
  hasMap: 'https://maps.google.com/?q=5443+Wellington+Rd+Manassas+VA+20110',
  sameAs: ['https://www.instagram.com/lorenasbakery.us/'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '200',
    bestRating: '5',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} ${dancing.variable}`}>
      <body className="bg-cream font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
