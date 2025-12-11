import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Outsourcing Projects & Skill Development in Hyderabad | SDCMS',
  description: 'Trusted HR outsourcing and skill development firm in Hyderabad, India. We specialize in contract staffing, training programs, and government project solutions.',
  keywords: [
    'outsourcing projects Hyderabad',
    'skill development Hyderabad',
    'HR outsourcing India',
    'contract staffing Hyderabad',
    'training programs Hyderabad',
    'government outsourcing',
    'SDCMS Hyderabad',
    'manpower outsourcing',
    'facility management solutions',
    'housekeeping and cleaning services'
  ],
  openGraph: {
    title: 'Outsourcing Projects & Skill Development in Hyderabad | SDCMS',
    description: 'Trusted HR outsourcing and skill development firm in Hyderabad, India. We specialize in contract staffing, training programs, and government project solutions.',
    url: '/',
    type: 'website',
    images: [
      {
        url: '/og/sdcms-og.jpg',
        width: 1200,
        height: 630,
        alt: 'SDCMS Outsourcing & Skill Development in Hyderabad'
      }
    ],
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outsourcing Projects & Skill Development in Hyderabad | SDCMS',
    description: 'Trusted HR outsourcing and skill development firm in Hyderabad, India. We specialize in contract staffing, training programs, and government project solutions.',
    images: ['/og/sdcms-og.jpg']
  },
  alternates: {
    canonical: '/'
  }
};

export default function Home() {
  return <HomeClient />;
 
}
