import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us – SDC Management Solutions, Hyderabad',
  description: 'Contact SDCMS for expert outsourcing, staffing and training solutions. Reach out via phone or email for customized HR and skill development services.',
  keywords: [
    'contact SDCMS',
    'SDCMS Hyderabad contact',
    'outsourcing contact',
    'staffing solutions contact',
    'training services contact',
    'HR outsourcing contact',
    'SDC Management Solutions contact'
  ],
  openGraph: {
    title: 'Contact Us – SDC Management Solutions, Hyderabad',
    description: 'Contact SDCMS for expert outsourcing, staffing and training solutions. Reach out via phone or email for customized HR and skill development services.',
    url: '/contact',
    type: 'website',
    images: [
      {
        url: '/og/sdcms-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact SDCMS - Hyderabad'
      }
    ],
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us – SDC Management Solutions, Hyderabad',
    description: 'Contact SDCMS for expert outsourcing, staffing and training solutions. Reach out via phone or email for customized HR and skill development services.',
    images: ['/og/sdcms-og.jpg']
  },
  alternates: {
    canonical: '/contact'
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

