import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Building2, Users, Award, HardHat, Mountain, Shield, Sparkles, GraduationCap } from 'lucide-react';
import { services } from '@/data/services';
import dynamic from 'next/dynamic';

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

const ServiceDetailClient = dynamic(() => import('./ServiceDetailClient'));

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-brand-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return <ServiceDetailClient service={service} />;
}

export async function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }));
}