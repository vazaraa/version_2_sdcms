import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Clients – Trusted by Industry Leaders | SDCMS',
  description: 'SDCMS serves leading government and private sector clients across India. Discover our client portfolio in outsourcing, staffing, and training services.',
  keywords: [
    'SDCMS clients',
    'outsourcing clients',
    'government clients',
    'private sector clients',
    'client portfolio',
    'trusted partners',
    'industry leaders'
  ],
  openGraph: {
    title: 'Our Clients – Trusted by Industry Leaders | SDCMS',
    description: 'SDCMS serves leading government and private sector clients across India. Discover our client portfolio in outsourcing, staffing, and training services.',
    url: '/clients',
    type: 'website',
    images: [
      {
        url: '/og/sdcms-og.jpg',
        width: 1200,
        height: 630,
        alt: 'SDCMS Clients Portfolio'
      }
    ],
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Clients – Trusted by Industry Leaders | SDCMS',
    description: 'SDCMS serves leading government and private sector clients across India. Discover our client portfolio in outsourcing, staffing, and training services.',
    images: ['/og/sdcms-og.jpg']
  },
  alternates: {
    canonical: '/clients'
  }
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

