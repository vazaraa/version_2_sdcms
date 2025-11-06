import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'SDCMS | Manpower Outsourcing & Facility Management Guntur',
  description: 'Manpower outsourcing, HR outsourcing, facility management, housekeeping and payroll services in Guntur, Andhra Pradesh and South India.',
  keywords: [
    'SDC Management Solutions Pvt Ltd',
    'SDCMS Guntur',
    'manpower outsourcing',
    'facility management solutions',
    'housekeeping and cleaning services',
    'HR outsourcing'
  ],
  openGraph: {
    title: 'SDCMS | Manpower Outsourcing & Facility Management Guntur',
    description: 'Trusted manpower outsourcing and facility management company in Guntur, Andhra Pradesh serving South India.',
    url: '/',
  },
  twitter: {
    title: 'SDCMS | Manpower Outsourcing & Facility Management',
    description: 'Staffing, HR outsourcing, housekeeping and payroll services in Guntur & South India.',
  }
};

export default function Home() {
  return <HomeClient />;
}
