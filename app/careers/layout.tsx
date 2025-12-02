import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at SDCMS – Join Our Team | Hyderabad',
  description: 'Explore career opportunities at SDCMS in staffing, HR, facility management, and training. Join our team in Hyderabad and across India.',
  keywords: [
    'SDCMS careers',
    'jobs at SDCMS',
    'HR jobs Hyderabad',
    'staffing jobs',
    'facility management careers',
    'training jobs',
    'career opportunities',
    'SDCMS jobs'
  ],
  openGraph: {
    title: 'Careers at SDCMS – Join Our Team | Hyderabad',
    description: 'Explore career opportunities at SDCMS in staffing, HR, facility management, and training. Join our team in Hyderabad and across India.',
    url: '/careers',
    type: 'website',
    images: [
      {
        url: '/og/sdcms-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Careers at SDCMS'
      }
    ],
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at SDCMS – Join Our Team | Hyderabad',
    description: 'Explore career opportunities at SDCMS in staffing, HR, facility management, and training. Join our team in Hyderabad and across India.',
    images: ['/og/sdcms-og.jpg']
  },
  alternates: {
    canonical: '/careers'
  }
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

