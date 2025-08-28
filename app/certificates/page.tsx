'use client';

import React from 'react';
import Link from 'next/link';
import { useGSAP } from '@/hooks/useGSAP';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Award, Shield, CheckCircle, Calendar, Building2, Users } from 'lucide-react';

export default function CertificatesPage() {
  const containerRef = useGSAP();

  const certificates = [
    {
      id: '7',
      title: 'ISO Certification',
      issuer: 'International Organization for Standardization',
      issueDate: '2024',
      validUntil: '2027',
      description: 'Certified for compliance with international standards.',
      category: 'Quality & Standards',
      image: '/images/certificates/iso.jpeg',
      icon: Award
    },
    {
      id: '8',
      title: 'EduBridge Certificate',
      issuer: 'EduBridge',
      issueDate: '2024',
      validUntil: '2027',
      description: 'Awarded for successful completion of professional training.',
      category: 'Professional Training',
      image: '/images/certificates/edubridge.jpeg',
      icon: Award
    }
  ];

  const certificationStats = [
    { label: 'Active Certifications', value: '15+', icon: Award },
    { label: 'Certified Professionals', value: '50+', icon: Users },
    { label: 'Years of Compliance', value: '10+', icon: Calendar },
    { label: 'Industry Standards', value: '8+', icon: CheckCircle }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our Certifications & Awards
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Demonstrating our commitment to excellence through industry-recognized 
                certifications, quality standards, and professional achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {certificationStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="scale-in text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards & Recognitions */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Awards & Recognitions
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Celebrating our achievements and industry recognition for excellence in HR, staffing, and workplace culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Award 1 */}
            <div className="text-center">
              <img src="/images/certificates/Screenshot_4-7-2025_15133_.jpeg" alt="HR Talent Management Leadership Awards" className="mx-auto mb-4 h-14 object-contain" />
              <div className="text-primary font-medium mb-1">Recognition</div>
              <div className="font-semibold mb-1">Best Overall Recruiting & Staffing Organization of the Year 2020</div>
            </div>
            {/* Award 2 */}
            <div className="text-center">
              <img src="/images/certificates/Screenshot_4-7-2025_15155_.jpeg" alt="Global HR Excellence Awards" className="mx-auto mb-4 h-14 object-contain" />
              <div className="text-primary font-medium mb-1">Recognition</div>
              <div className="font-semibold mb-1">Best Service Provider in HR for the year 2020</div>
            </div>
            {/* Award 3 */}
            <div className="text-center">
              <img src="/images/certificates/Screenshot_4-7-2025_15214_.jpeg" alt="HR Vendors of the Year 2017" className="mx-auto mb-4 h-14 object-contain" />
              <div className="text-primary font-medium mb-1">Service Provider Ratings</div>
              <div className="font-semibold mb-1">Best Staffing Organization / Firm for the year 2020</div>
            </div>
            {/* Award 4 */}
            <div className="text-center">
              <img src="/images/certificates/Screenshot_4-7-2025_1522_.jpeg" alt="Dream Companies to Work For" className="mx-auto mb-4 h-14 object-contain" />
              <div className="text-primary font-medium mb-1">2019 & 2020</div>
              <div className="font-semibold mb-1">Dream Companies to work for in India</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Certifications
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our comprehensive portfolio of certifications demonstrates our commitment 
                to maintaining the highest standards of quality, security, and professional excellence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => {
              const Icon = certificate.icon;
              return (
                <Card key={certificate.id} className="scale-in hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-0">
                    <div className="aspect-video relative">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-t-lg"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {certificate.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {certificate.title}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {certificate.issuer}
                      </p>
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {certificate.description}
                      </p>
                      
                      {/* Certificate Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Issued:</span>
                          <span className="font-medium text-foreground">{certificate.issueDate}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Valid Until:</span>
                          <span className="font-medium text-foreground">{certificate.validUntil}</span>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="flex justify-center">
                        <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                          Active
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Experience Certified Excellence
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Partner with us to benefit from our certified processes, quality standards, 
                and professional expertise that ensure successful project outcomes.
              </p>
              <Button size="lg" className="group">
                <Link href="/contact" className="flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}