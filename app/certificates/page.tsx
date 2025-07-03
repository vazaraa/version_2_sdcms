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
      id: '1',
      title: 'ISO 9001:2015 Quality Management',
      issuer: 'International Organization for Standardization',
      issueDate: '2023',
      validUntil: '2026',
      description: 'Certified for maintaining high-quality management systems and continuous improvement processes.',
      category: 'Quality Management',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      icon: Award
    },
    {
      id: '2',
      title: 'ISO 27001:2013 Information Security',
      issuer: 'International Organization for Standardization',
      issueDate: '2023',
      validUntil: '2026',
      description: 'Certified for implementing and maintaining robust information security management systems.',
      category: 'Information Security',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
      icon: Shield
    },
    {
      id: '3',
      title: 'CMMI Level 3 Certification',
      issuer: 'Capability Maturity Model Integration Institute',
      issueDate: '2022',
      validUntil: '2025',
      description: 'Recognized for defined and standardized processes across all project management activities.',
      category: 'Process Maturity',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
      icon: CheckCircle
    },
    {
      id: '4',
      title: 'PMP Certified Professionals',
      issuer: 'Project Management Institute',
      issueDate: '2023',
      validUntil: 'Ongoing',
      description: 'Multiple team members certified in Project Management Professional standards and best practices.',
      category: 'Project Management',
      image: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg',
      icon: Users
    },
    {
      id: '5',
      title: 'Government Vendor Registration',
      issuer: 'Government of India',
      issueDate: '2020',
      validUntil: '2025',
      description: 'Registered and approved vendor for government projects and procurement processes.',
      category: 'Government Compliance',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg',
      icon: Building2
    },
    {
      id: '6',
      title: 'Industry Excellence Award',
      issuer: 'Management Consulting Association',
      issueDate: '2023',
      validUntil: 'Permanent',
      description: 'Recognized for outstanding contribution to the management consulting industry.',
      category: 'Industry Recognition',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
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
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
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
      <section className="py-16 bg-background">
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

      {/* Certificates Grid */}
      <section className="py-20 bg-muted/30">
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

      {/* Quality Commitment */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Commitment to Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At SDC Management Solutions, we believe that certifications are more than just 
                  credentials – they represent our unwavering commitment to delivering excellence 
                  in every aspect of our operations.
                </p>
                <p>
                  Our comprehensive certification portfolio ensures that we maintain the highest 
                  standards of quality, security, and professional competence across all our 
                  service offerings and business processes.
                </p>
                <p>
                  We continuously invest in maintaining and upgrading our certifications, ensuring 
                  that our clients receive services that meet and exceed international standards 
                  and industry best practices.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Key Benefits:</h3>
                <div className="space-y-3">
                  {[
                    'Assured quality and compliance standards',
                    'Reduced project risks and enhanced reliability',
                    'International recognition and credibility',
                    'Continuous improvement and innovation'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="slide-in-right">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Quality commitment"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
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