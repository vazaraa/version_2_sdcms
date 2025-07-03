import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { companies } from '@/data/companies';
import dynamic from 'next/dynamic';

const CompanyDetailClient = dynamic(() => import('./CompanyDetailClient'));

interface CompanyDetailPageProps {
  params: {
    slug: string;
  };
}

export default function CompanyDetailPage({ params }: CompanyDetailPageProps) {
  const company = companies.find(c => c.slug === params.slug);

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Company Not Found</h1>
          <Link href="/group-companies">
            <Button>Back to Group Companies</Button>
          </Link>
        </div>
      </div>
    );
  }

  return <CompanyDetailClient company={company} iconName={company.icon} />;
}

// Required for static generation with output: export
export async function generateStaticParams() {
  return companies.map(company => ({ slug: company.slug }));
}