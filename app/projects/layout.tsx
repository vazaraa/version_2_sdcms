import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Portfolio – SDCMS Outsourcing & Skill Development Projects',
  description: 'Explore SDCMS successful outsourcing projects, government initiatives, and skill development programs across Hyderabad and India.',
  keywords: [
    'outsourcing projects',
    'government projects',
    'skill development projects',
    'SDCMS projects',
    'project portfolio',
    'training projects',
    'HR outsourcing projects'
  ],
  openGraph: {
    title: 'Project Portfolio – SDCMS Outsourcing & Skill Development Projects',
    description: 'Explore SDCMS successful outsourcing projects, government initiatives, and skill development programs across Hyderabad and India.',
    url: '/projects',
    type: 'website',
    images: [
      {
        url: '/og/sdcms-og.jpg',
        width: 1200,
        height: 630,
        alt: 'SDCMS Project Portfolio'
      }
    ],
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Portfolio – SDCMS Outsourcing & Skill Development Projects',
    description: 'Explore SDCMS successful outsourcing projects, government initiatives, and skill development programs across Hyderabad and India.',
    images: ['/og/sdcms-og.jpg']
  },
  alternates: {
    canonical: '/projects'
  }
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

