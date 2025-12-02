import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Outsourcing, Staffing & Training Services – SDCMS, Hyderabad',
  description: 'SDCMS offers contract staffing, government outsourcing, security, facility management, and training & development services across India.',
  keywords: [
    'outsourcing services',
    'staffing solutions',
    'training services',
    'contract staffing',
    'government outsourcing',
    'facility management',
    'security services',
    'SDCMS Hyderabad',
    'HR outsourcing',
    'skill development'
  ],
  openGraph: {
    title: 'Outsourcing, Staffing & Training Services – SDCMS, Hyderabad',
    description: 'SDCMS offers contract staffing, government outsourcing, security, facility management, and training & development services across India.',
    url: '/services',
    type: 'website',
    images: [
      {
        url: '/og/sdcms-og.jpg',
        width: 1200,
        height: 630,
        alt: 'SDCMS Outsourcing, Staffing & Training Services'
      }
    ],
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outsourcing, Staffing & Training Services – SDCMS, Hyderabad',
    description: 'SDCMS offers contract staffing, government outsourcing, security, facility management, and training & development services across India.',
    images: ['/og/sdcms-og.jpg']
  },
  alternates: {
    canonical: '/services'
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

