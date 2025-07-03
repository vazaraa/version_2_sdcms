'use client';

import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Target, Building2, Settings, ShoppingCart, Home, Calendar, Award } from 'lucide-react';
import type { Company } from '@/data/companies';
import { companies as allCompanies } from '@/data/companies';

interface CompanyDetailClientProps {
  company: Company;
  iconName: string;
}

function getIcon(iconName: string) {
  switch (iconName) {
    case 'Target': return Target;
    case 'Building2': return Building2;
    case 'Settings': return Settings;
    case 'ShoppingCart': return ShoppingCart;
    case 'Home': return Home;
    default: return Building2;
  }
}

const CompanyDetailClient: React.FC<CompanyDetailClientProps> = ({ company, iconName }) => {
  const containerRef = useGSAP();
  const sliderRef = useRef<HTMLDivElement>(null);
  const companies = allCompanies.filter(c => c.id !== company.id);

  useEffect(() => {
    if (!sliderRef.current || companies.length === 0) return;
    let gsap: any, ScrollTrigger: any;
    let ctx: any;
    (async () => {
      gsap = (await import('gsap')).default;
      ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const numCompanies = companies.length;
      const slider = sliderRef.current;
      const cards = gsap.utils.toArray('.company-slide') as HTMLElement[];

      gsap.set(cards, { xPercent: (i: number) => i * 100 });

      gsap.to(cards, {
        xPercent: `-=${100 * (numCompanies - 1)}`,
        ease: 'none',
        scrollTrigger: {
          trigger: slider,
          start: 'top top',
          end: `+=${numCompanies * 100}vh`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    })();

    return () => {
      if (ScrollTrigger) ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      if (ctx) ctx.revert?.();
    };
  }, [companies]);

  const Icon = getIcon(iconName);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground transition-colors">
      {/* Hero Section */}
      <section className="py-20 bg-background dark:bg-[#18181b] transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`flex items-center justify-center w-16 h-16 rounded-full ${company.color} text-white shadow-lg`}>
                  <Icon className="h-8 w-8" />
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Established {company.established}</span>
                </div>
              </div>
              <h1 className="text-5xl font-extrabold text-foreground mb-4">
                {company.name}
              </h1>
              <p className="text-2xl text-primary font-semibold mb-6">
                {company.specialization}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {company.description}
              </p>
              <Button size="lg" className="group">
                <Link href="/contact" className="flex items-center">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={company.image}
                alt={company.name}
                className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent rounded-xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-20 bg-background transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                About {company.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {company.fullDescription}
              </p>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Our Services
              </h3>
              <div className="space-y-3">
                {company.services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              {/* Features */}
              <Card className="bg-card dark:bg-[#232323] border border-border shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {company.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              {/* Achievements */}
              <Card className="bg-card dark:bg-[#232323] border border-border shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Key Achievements
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {company.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Companies - Horizontal Scroll Animation */}
      <section className="relative w-full min-h-[400px] bg-background transition-colors flex flex-col items-center justify-center py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Other Group Companies
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore our other specialized companies that complement our comprehensive service offerings.
          </p>
        </div>
        <div
          ref={sliderRef}
          className="relative w-full overflow-x-auto flex items-center gap-8 px-4 pb-4"
          style={{ minHeight: '400px', height: 'auto' }}
        >
          {companies.map((relatedCompany, idx) => {
            const RelatedIcon = getIcon(relatedCompany.icon);
            return (
              <div
                key={relatedCompany.id}
                className="flex-shrink-0 w-full max-w-xs flex items-center justify-center"
              >
                <Card className="w-full bg-card dark:bg-[#232323] border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full ${relatedCompany.color} text-white mb-4`}>
                      <RelatedIcon className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-1 text-center">
                      {relatedCompany.name}
                    </h4>
                    <p className="text-primary font-medium mb-1 text-center text-sm">
                      {relatedCompany.specialization}
                    </p>
                    <p className="text-muted-foreground mb-2 leading-relaxed text-center text-xs">
                      {relatedCompany.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full group mt-2">
                      <Link href={`/group-companies/${relatedCompany.slug}`} className="flex items-center justify-center w-full">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CompanyDetailClient; 