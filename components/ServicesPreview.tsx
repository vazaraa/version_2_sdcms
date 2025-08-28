'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Target, Users, Shield, Wrench, GraduationCap, ClipboardList, Building, Truck, Award } from 'lucide-react';
import { services } from '@/data/services';
import Image from 'next/image';

const ServicesPreview = () => {
  const featuredServices = services.slice(0, 3);

  return (
    <section className="py-20 bg-brand-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-navy">
            Our <span className="text-brand-red">Services</span>
            </h2>
            <p className="text-xl text-brand-navy/70 leading-relaxed">
            Comprehensive management solutions tailored to meet your business needs.<br />
            From construction to staffing, we provide end-to-end services that drive success.
            </p>
        </div>

        {/* Services Cards Row */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl flex flex-col w-full md:w-1/3 max-w-sm mx-auto overflow-hidden transition-all duration-500 hover:scale-105 border border-brand-cream/50 hover:border-brand-red/30"
            >
              {/* Enhanced Service Image & Badge */}
              <div className="relative w-full h-48 bg-gradient-to-br from-brand-red/10 to-brand-peach/20">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent"></div>
                
                {/* Service Icon and Category Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                  <div className="relative">
                    {service.title === 'Government OutSourcing' ? (
                      // Enhanced target-like icon for Government OutSourcing
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-red to-red-600 rounded-full flex items-center justify-center shadow-lg border-2 border-red-400/50">
                        <div className="w-7 h-7 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center border-2 border-red-300/60">
                          <div className="w-5 h-5 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center border-2 border-red-200/70">
                            <div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm border border-red-100/80"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Regular icon for other services
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-red to-red-600 rounded-full flex items-center justify-center shadow-lg border border-red-400/30">
                        {(() => {
                          switch (service.icon) {
                            case 'target': return <Target className="w-5 h-5 text-white drop-shadow-sm stroke-[2.5]" />;
                            case 'users': return <Users className="w-5 h-5 text-white drop-shadow-sm stroke-[2.5]" />;
                            case 'shield': return <Shield className="w-5 h-5 text-white drop-shadow-sm stroke-[2.5]" />;
                            case 'wrench': return <Wrench className="w-5 h-5 text-white drop-shadow-sm stroke-[2.5]" />;
                            case 'graduation-cap': return <GraduationCap className="w-5 h-5 text-white drop-shadow-sm stroke-[2.5]" />;
                            case 'clipboard-list': return <ClipboardList className="w-5 h-5 text-white drop-shadow-sm stroke-[2.5]" />;
                            case 'building': return <Building className="w-5 h-5 text-white drop-shadow-sm stroke-[2.5]" />;
                            case 'truck': return <Truck className="w-5 h-5 text-white drop-shadow-sm stroke-[2.5]" />;
                            case 'award': return <Award className="w-5 h-5 text-white drop-shadow-sm stroke-[2.5]" />;
                            default: return <Target className="w-5 h-5 text-white drop-shadow-sm stroke-[2.5]" />;
                          }
                        })()}
                      </div>
                    )}
                    {/* Animated ripple effect */}
                    <div className="absolute inset-0 w-10 h-10 bg-brand-red/30 rounded-full animate-ping"></div>
                  </div>
                  <span className="bg-brand-peach/90 text-brand-red text-sm px-3 py-1 rounded-full font-semibold shadow-sm">
                    {service.category}
                  </span>
                </div>
                
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-t-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  sizes="370px"
                  priority={index === 0}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-t-2xl"></div>
                
                <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-10">
                  <span className="bg-white text-brand-red font-bold text-lg px-5 py-2 rounded-lg shadow-lg border-2 border-brand-red whitespace-nowrap group-hover:border-brand-red/80 transition-colors duration-300">
                    {service.title}
                  </span>
                </div>
              </div>
              
              {/* Enhanced Service Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-brand-navy/80 mb-4 text-base leading-relaxed group-hover:text-brand-navy transition-colors duration-300">
                  {service.description}
                </p>
                <ul className="mb-6 space-y-2">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-base text-brand-navy group-hover:text-brand-navy/90 transition-colors duration-300">
                      <CheckCircle2 className="text-brand-red w-5 h-5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="bg-brand-red hover:bg-brand-red/90 text-white font-semibold text-base py-3 rounded-lg mt-auto transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  <Link href={`/services/${service.slug}`} className="flex items-center justify-center w-full">
                    Get Started
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;