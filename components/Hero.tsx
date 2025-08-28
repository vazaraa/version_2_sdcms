'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Target, Users, Shield, Wrench, GraduationCap, ClipboardList, Building, Truck, Award } from 'lucide-react';
const RetroGrid = React.lazy(() => import('@/components/ui/retro-grid').then(m => ({ default: m.RetroGrid })));
const ContainerTextFlip = React.lazy(() => import('@/components/ui/container-text-flip').then(m => ({ default: m.ContainerTextFlip })));

const services = [
  {
    title: 'Outsourcing',
    desc: 'all types of man power in Government,Private,MNC Sectors.',
    img: '/images/services/staffing-bg.webp',
    slug: 'government-and-outsourcing',
    icon: Target,
    category: 'Government'
  },
  {
    title: 'Recruitment & Staffing',
    desc: 'Professional talent acquisition and HR solutions.',
    img: '/images/services/Staffing_Solutions.webp',
    label: 'Staffing Solutions',
    slug: 'recruitment-and-staffing-solutions',
    icon: Users,
    category: 'Human Resources'
  },
  {
    title: 'Compliance',
    desc: 'Statutory,Regulatory and documentation services.',
    img: '/images/services/values.webp',
    slug: 'government-and-outsourcing',
    icon: Shield,
    category: 'Compliance'
  },
  {
    title: 'Mining',
    desc: 'Mining and raw material solutions.',
    img: '/images/services/mining-bg.webp',
    slug: 'mining-raw-materials',
    icon: Truck,
    category: 'Mining'
  },
  {
    title: 'Security',
    desc: 'Security surveillance services.',
    img: '/images/services/security-bg.webp',
    slug: 'security-services',
    icon: Shield,
    category: 'Security'
  },
  {
    title: 'Housekeeping',
    desc: 'laundry,Professional cleaning services.',
    img: '/images/services/housekeeping-bg.webp',
    slug: 'housekeeping-services',
    icon: Wrench,
    category: 'Facility Management'
  },
];

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-16 pb-10 px-0 overflow-hidden min-h-[700px] bg-brand-mint">
      
      {/* Radial background overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_800px_400px,_#e3faea_60%,_#e3faea_80%,_#e3faea_100%)] opacity-80"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-brand-red mb-4 mt-6 drop-shadow-sm w-full">
          SDC Management Solutions
        </h1>
        
        {/* Subtitle with animated keywords, all same size and inline */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-xl md:text-2xl font-semibold text-brand-navy mb-6">
          <span>Empowering organizations with</span>
          <span>
            <Suspense fallback={<span>...</span>}>
              <ContainerTextFlip
                words={["consulting", "staffing", "compliance", "industrial solutions"]}
                wordColors={["#E53935", "#FBC02D", "#E53935", "#263238"]}
                className="inline bg-transparent shadow-none p-0"
                textClassName="text-inherit font-inherit"
                animationDuration={900}
              />
            </Suspense>
          </span>
          <span>for sustainable growth and success.</span>
        </div>
        
        {/* Core Services - Now in one horizontal line */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 mt-2 w-full">Our Core Services</h2>
        
        {/* Services in horizontal row - no scrollbar, all visible */}
        <div className="w-full px-4 mb-8">
          <div className="flex justify-center gap-3 md:gap-4 w-full overflow-hidden">
            {services.map((service, idx) => (
              <Link
                key={service.title}
                href={`/services/${service.slug}`}
                className="group flex-shrink-0 bg-white rounded-2xl shadow-lg flex flex-col items-center w-[180px] md:w-[200px] min-h-[280px] p-0 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer border border-brand-cream/70 hover:border-brand-red/30"
              >
                {/* Enhanced Header with Icon and Tag */}
                <div className="relative w-full h-[120px] md:h-[130px] bg-gradient-to-br from-brand-red/10 to-brand-peach/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent"></div>
                  
                  {/* Service Icon and Category Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="relative">
                      {service.title === 'Government OutSourcing' ? (
                        // Enhanced target-like icon for Government OutSourcing
                        <div className="w-8 h-8 bg-gradient-to-br from-brand-red to-red-600 rounded-full flex items-center justify-center shadow-lg border-2 border-red-400/50">
                          <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center border-2 border-red-300/60">
                            <div className="w-4 h-4 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center border-2 border-red-200/70">
                              <div className="w-2 h-2 bg-white rounded-full shadow-sm border border-red-100/80"></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Regular icon for other services
                        <div className="w-8 h-8 bg-gradient-to-br from-brand-red to-red-600 rounded-full flex items-center justify-center shadow-lg border border-red-400/30">
                          <service.icon className="w-4 h-4 text-white drop-shadow-sm stroke-[2.5]" />
                        </div>
                      )}
                      {/* Animated ripple effect */}
                      <div className="absolute inset-0 w-8 h-8 bg-brand-red/30 rounded-full animate-ping"></div>
                    </div>
                    <span className="bg-brand-peach/80 text-brand-red text-xs px-2 py-1 rounded-full font-semibold shadow-sm">
                      {service.category}
                    </span>
                  </div>
                  
                  {/* Service Image */}
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    sizes="200px"
                    priority={idx < 2}
                    loading={idx < 2 ? undefined : 'lazy'}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-t-2xl"></div>
                  
                  {service.label && (
                    <span className="absolute top-2 right-2 bg-brand-red text-white text-xs px-2 py-1 rounded-full font-semibold shadow">
                      {service.label}
                    </span>
                  )}
                </div>
                
                {/* Enhanced Content */}
                <div className="flex flex-col items-center px-4 py-4 flex-1 w-full">
                  <h3 className="text-base md:text-lg font-bold text-brand-navy text-center mb-2 group-hover:text-brand-red transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-navy/70 text-center leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  
                  {/* Enhanced CTA Button
                  <button className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-semibold text-sm py-2 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-1">
                    Get Started
                    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Buttons
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2 w-full">
          <Link href="/contact" className="inline-block">
            <button className="bg-brand-red hover:brightness-95 text-white font-semibold text-lg px-8 py-3 rounded-full shadow transition flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <Link href="/services" className="inline-block">
            <button className="border-2 border-brand-red text-brand-red font-semibold text-lg px-8 py-3 rounded-full shadow hover:bg-brand-peach/40 transition">
              View All Services
            </button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;