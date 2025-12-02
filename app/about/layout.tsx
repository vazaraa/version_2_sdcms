import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About SDC Management Solutions (SDCMS) – Hyderabad Outsourcing Experts',
  description: 'Trusted Hyderabad outsourcing partner. SDCMS provides HR outsourcing, contract staffing, and skill development training across India.',
  keywords: [
    'SDCMS Hyderabad',
    'outsourcing experts',
    'HR outsourcing India',
    'contract staffing',
    'skill development training',
    'manpower outsourcing',
    'facility management',
    'SDC Management Solutions'
  ],
  openGraph: {
    title: 'About SDC Management Solutions (SDCMS) – Hyderabad Outsourcing Experts',
    description: 'Trusted Hyderabad outsourcing partner. SDCMS provides HR outsourcing, contract staffing, and skill development training across India.',
    url: '/about',
    type: 'website',
    images: [
      {
        url: '/og/sdcms-og.jpg',
        width: 1200,
        height: 630,
        alt: 'About SDCMS - Hyderabad Outsourcing Experts'
      }
    ],
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About SDC Management Solutions (SDCMS) – Hyderabad Outsourcing Experts',
    description: 'Trusted Hyderabad outsourcing partner. SDCMS provides HR outsourcing, contract staffing, and skill development training across India.',
    images: ['/og/sdcms-og.jpg']
  },
  alternates: {
    canonical: '/about'
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

