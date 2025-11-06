'use client';

import React from 'react';
import Link from 'next/link';
import { useGSAP } from '@/hooks/useGSAP';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Building2, Users, Award, Star, Quote } from 'lucide-react';
import { clients, governmentClients, privateClients } from '@/data/clients';
import StatsCounter from '@/components/StatsCounter';

export default function ClientsPage() {
  const containerRef = useGSAP();

  const industries = [
    { name: 'Technology', count: 45, icon: Building2 },
    { name: 'Healthcare', count: 32, icon: Users },
    { name: 'Manufacturing', count: 28, icon: Award },
    { name: 'Education', count: 25, icon: Star },
    { name: 'Government', count: 40, icon: Building2 },
    { name: 'Financial Services', count: 18, icon: Users }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our Valued Clients
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Trusted by industry leaders across diverse sectors, we've built lasting 
                partnerships through exceptional service delivery and innovative solutions.
              </p>
              {/* <div className="mt-3 text-sm">
                <Link href="/services" className="text-primary font-medium hover:underline underline-offset-4 mr-4">view our comprehensive services</Link>
                <Link href="/about" className="text-primary font-medium hover:underline underline-offset-4 mr-4">read about SDCMS</Link>
                <Link href="/contact" className="text-primary font-medium hover:underline underline-offset-4">request a proposal</Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Client Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Total Clients', value: '200+', icon: Users },
              { label: 'Active Projects', value: '50+', icon: Building2 },
              { label: 'Client Retention', value: '95%', icon: Award },
              { label: 'Satisfaction Rate', value: '98%', icon: Star }
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

      {/* Industries Served */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our expertise spans across multiple industries, delivering tailored 
                solutions that meet sector-specific requirements and challenges.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={industry.name} className="scale-in text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-1">
                      {industry.count}+
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Clients
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      {/* Removed as per user request */}

      {/* Success Stories
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover how we've helped our clients achieve remarkable transformations 
                and sustainable growth through our innovative solutions.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-8 overflow-x-auto pb-4 hide-scrollbar">
            {[
              {
                title: 'Digital Transformation Success',
                client: 'Fortune 500 Manufacturing Company',
                result: '40% increase in operational efficiency',
                description: 'Complete digital transformation including ERP implementation, process automation, and workforce training.',
                image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg'
              },
              {
                title: 'Government Project Excellence',
                client: 'State Government Agency',
                result: '₹200 Cr project delivered on time',
                description: 'Large-scale infrastructure project management with zero compliance issues and exceptional quality delivery.',
                image: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg'
              },
              {
                title: 'Healthcare System Modernization',
                client: 'Regional Healthcare Network',
                result: '60% improvement in patient care',
                description: 'Comprehensive healthcare IT implementation including EMR systems and telemedicine platforms.',
                image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg'
              },
              {
                title: 'Educational Technology Innovation',
                client: 'Leading Educational Institution',
                result: '90% improvement in learning outcomes',
                description: 'Implementation of advanced learning management systems and digital classroom solutions.',
                image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg'
              }
            ].map((story, index) => (
              <Card key={index} className="min-w-[340px] max-w-xs flex-shrink-0 scale-in hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-t-lg"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {story.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {story.client}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {story.result}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Key Achievement
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {story.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <style jsx>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      </section> */}

      {/* Government Clients */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Government Clients</h2>
          <div className="flex flex-row gap-8 overflow-x-auto pb-4 hide-scrollbar">
            {governmentClients.map((client: any, idx: number) => (
              <div key={client.alt} className="flex flex-col items-center min-w-[120px] max-w-[140px]">
                <img
                  src={client.src.src}
                  alt={client.alt}
                  title={client.alt}
                  className="w-20 h-20 object-contain rounded-lg shadow-md bg-white mb-2"
                  loading="lazy"
                />
                <span className="text-xs text-center text-muted-foreground truncate w-full" title={client.alt}>{client.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Sector Clients */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Private Sector Clients</h2>
          <div className="flex flex-row gap-8 overflow-x-auto pb-4 hide-scrollbar">
            {privateClients.map((client: any, idx: number) => (
              <div key={client.alt} className="flex flex-col items-center min-w-[120px] max-w-[140px]">
                <img
                  src={client.src.src}
                  alt={client.alt}
                  title={client.alt}
                  className="w-20 h-20 object-contain rounded-lg shadow-md bg-white mb-2"
                  loading="lazy"
                />
                <span className="text-xs text-center text-muted-foreground truncate w-full" title={client.alt}>{client.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Join Our Success Stories
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Ready to become our next success story? Let's discuss how we can help 
                you achieve your business goals with our proven expertise.
              </p>
              <Button size="lg" className="group">
                <Link href="/contact" className="flex items-center">
                  Start Your Journey
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