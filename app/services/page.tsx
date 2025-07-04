'use client';

import React from 'react';
import Link from 'next/link';
import { useGSAP } from '@/hooks/useGSAP';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Target, Users, Building, Truck, Shield, Wrench, GraduationCap, ClipboardList, Award } from 'lucide-react';
import { services } from '@/data/services';

export default function ServicesPage() {
  const containerRef = useGSAP();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return Target;
      case 'Users':
        return Users;
      case 'Building':
        return Building;
      case 'Truck':
        return Truck;
      case 'Shield':
        return Shield;
      case 'Wrench':
        return Wrench;
      case 'GraduationCap':
        return GraduationCap;
      case 'ClipboardList':
        return ClipboardList;
      case 'Award':
        return Award;
      default:
        return Target;
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our Comprehensive Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Delivering excellence across multiple domains with specialized expertise, 
                innovative solutions, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = getIcon(service.icon);
              return (
                <Card key={service.id} className="scale-in hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-0">
                    <div className="aspect-video relative">
                      <img
                        src={service.image}
                        alt={service.title}
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
                          {service.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button variant="outline" className="w-full group">
                        <Link href={`/services/${service.slug}`} className="flex items-center justify-center w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Let's discuss how our comprehensive services can help you achieve your goals 
                and drive sustainable growth for your organization.
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