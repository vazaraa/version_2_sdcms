'use client';

import React from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Building2, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronDown,
  Settings,
  Users,
  Briefcase,
  Phone,
  MapPin,
  Target,
  HardHat,
  Mountain,
  Shield,
  Sparkles,
  GraduationCap,
  Home,
  ShoppingCart,
  Truck,
  Wrench,
  ClipboardList,
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import type { Service } from '@/data/services';
import { services as allServices } from '@/data/services';
import Image from 'next/image';

interface ServiceDetailClientProps {
  service: Service;
}

const iconMap: Record<string, React.ComponentType<{ size?: string | number; className?: string }>> = {
  target: Target,
  users: Users,
  building: Building2,
  truck: Truck,
  shield: Shield,
  wrench: Wrench,
  'graduation-cap': GraduationCap,
  'clipboard-list': ClipboardList,
  award: Award,
};

const ServiceDetailClient: React.FC<ServiceDetailClientProps> = ({ service }) => {
  const containerRef = useGSAP();
  const Icon = iconMap[service.icon] || Target;
  const relatedServices = allServices.filter(s => s.slug !== service.slug).slice(0, 3);

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  {service.title === 'Government OutSourcing' ? (
                    // Enhanced target-like icon for Government OutSourcing
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-red to-red-600 shadow-lg border-2 border-red-400/50">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center border-2 border-red-300/60">
                        <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center border-2 border-red-200/70">
                          <div className="w-4 h-4 bg-white rounded-full shadow-sm border border-red-100/80"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Regular icon for other services
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-red to-red-600 text-white shadow-lg border border-red-400/30">
                      <Icon className="w-8 h-8 text-white drop-shadow-sm stroke-[2]" />
                    </div>
                  )}
                  {/* Animated ripple effect */}
                  <div className="absolute inset-0 w-16 h-16 bg-brand-red/30 rounded-full animate-ping"></div>
                </div>
                <span className="bg-brand-peach/80 text-brand-red px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
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
      <section className="py-20">
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

      {/* Related Services */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map(rs => (
              <Card key={rs.id}>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{rs.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{rs.description}</p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                      <Link href={`/services/${rs.slug}`}>Learn More</Link>
                    </Button>
                    <Button size="sm">
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
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