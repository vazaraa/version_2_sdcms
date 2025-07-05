'use client';

import React from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Building2, Users, Award, HardHat, Mountain, Shield, Sparkles, GraduationCap, Target, Truck, Wrench } from 'lucide-react';
import type { Service } from '@/data/services';
import Image from 'next/image';

interface ServiceDetailClientProps {
  service: Service;
}

const iconMap: Record<string, React.ComponentType<{ size?: string | number }>> = {
  Target,
  Users,
  Building: Building2,
  Truck,
  Shield,
  Wrench,
  GraduationCap,
  ClipboardList: Sparkles, // fallback if not imported, adjust as needed
  Award,
};

const ServiceDetailClient: React.FC<ServiceDetailClientProps> = ({ service }) => {
  const containerRef = useGSAP();
  const Icon = iconMap[service.icon] || Target;

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground">
                  <Icon size={32} />
                </div>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  {service.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>
              <Button size="lg" className="group">
                <Link href="/contact" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="slide-in-right flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="slide-in-left">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Service Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {service.fullDescription}
              </p>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Our Process
              </h3>
              <div className="space-y-4">
                {service.processSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="slide-in-right space-y-8">
              {/* Features */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              {/* Benefits */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Benefits
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Contact us today to discuss how our {service.title.toLowerCase()} services 
                can help transform your business and achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  <Link href="/contact" className="flex items-center">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailClient; 