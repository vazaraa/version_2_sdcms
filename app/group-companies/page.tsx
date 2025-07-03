'use client';

import React from 'react';
import Link from 'next/link';
import { useGSAP } from '@/hooks/useGSAP';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Target, Building2, Settings, ShoppingCart, Home } from 'lucide-react';
import { companies } from '@/data/companies';

export default function GroupCompaniesPage() {
  const containerRef = useGSAP();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return Target;
      case 'Building2':
        return Building2;
      case 'Settings':
        return Settings;
      case 'ShoppingCart':
        return ShoppingCart;
      case 'Home':
        return Home;
      default:
        return Building2;
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
                Our Group Companies
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                A diverse portfolio of specialized companies delivering innovative solutions 
                across multiple industries, each committed to excellence and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Business Portfolio
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From government consulting to e-commerce, our group companies span diverse 
                sectors, each bringing specialized expertise and innovative solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => {
              const Icon = getIcon(company.icon);
              return (
                <Card key={company.id} className="scale-in hover:shadow-xl transition-shadow duration-300 h-full group">
                  <CardContent className="p-0">
                    <div className="aspect-video relative">
                      <img
                        src={company.image}
                        alt={company.name}
                        className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-t-lg"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-full ${company.color} text-white`}>
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                          Est. {company.established}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {company.name}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {company.specialization}
                      </p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {company.description}
                      </p>
                      
                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {company.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button variant="outline" className="w-full group">
                        <Link href={`/group-companies/${company.slug}`} className="flex items-center justify-center w-full">
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

      {/* Group Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Group Performance
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our collective achievements across all group companies demonstrate 
                our commitment to excellence and growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Group Companies', value: '5', icon: Building2 },
              { label: 'Combined Experience', value: '50+', icon: Target },
              { label: 'Total Projects', value: '1000+', icon: Settings },
              { label: 'Industries Served', value: '15+', icon: Home }
            ].map((stat, index) => {
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

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Partner with Our Group
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover how our diverse portfolio of companies can provide comprehensive 
                solutions for your business needs across multiple sectors.
              </p>
              <Button size="lg" className="group">
                <Link href="/contact" className="flex items-center">
                  Get in Touch
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