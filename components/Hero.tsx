'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { RetroGrid } from "@/components/ui/retro-grid";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

const services = [
  {
    title: 'Outsourcing',
    desc: 'all types of man power and Government,Private,MNC.',
    img: '/images/services/staffing-bg.webp',
  },
  {
    title: 'Recruitment & Staffing',
    desc: 'Professional talent acquisition and HR solutions.',
    img: '/images/services/Staffing_Solutions.webp',
    label: 'Staffing Solutions',
  },
  {
    title: 'Compliance',
    desc: 'Statutory,Regulatory and documentation services.',
    img: '/images/services/values.webp',
  },
  {
    title: 'Mining',
    desc: 'Mining and raw material solutions.',
    img: '/images/services/mining-bg.webp',
  },
  {
    title: 'Security',
    desc: 'Security surveillance services.',
    img: '/images/services/security-bg.webp',
  },
  {
    title: 'Housekeeping',
    desc: 'laundry,Professional cleaning services.',
    img: '/images/services/housekeeping-bg.webp',
  },
];

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-16 pb-10 px-0 overflow-hidden min-h-[700px]">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 z-0">
        <RetroGrid />
      </div>
      
      {/* Radial background overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_800px_400px,_#fffbe6_60%,_#fff_80%,_#ffeaea_100%)] opacity-40"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-red-600 mb-4 mt-6 drop-shadow-sm w-full">
          SDC Management Solutions
        </h1>
        
        {/* Subtitle with animated keywords, all same size and inline */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-xl md:text-2xl font-semibold text-gray-700 mb-6">
          <span>Empowering organizations with</span>
          <span>
            <ContainerTextFlip
              words={["consulting", "staffing", "compliance", "industrial solutions"]}
              wordColors={["#2563eb", "#f59e42", "#ef4444", "#059669"]}
              className="inline bg-transparent shadow-none p-0"
              textClassName="text-inherit font-inherit"
              animationDuration={900}
            />
          </span>
          <span>for sustainable growth and success.</span>
        </div>
        {/* Core Services */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 mt-2 w-full">Our Core Services</h2>
        <div className="flex flex-wrap justify-center gap-6 w-full px-0 mb-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-md flex flex-col items-center w-[220px] min-h-[260px] p-0 overflow-hidden transition-transform hover:scale-105"
            >
              <div className="relative w-full h-[110px]">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover rounded-t-2xl"
                  sizes="220px"
                  priority={idx < 2}
                />
                {service.label && (
                  <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded font-semibold shadow">
                    {service.label}
                  </span>
                )}
              </div>
              <div className="flex flex-col items-center px-4 py-4">
                <h3 className="text-lg font-bold text-gray-900 text-center mb-1">{service.title}</h3>
                <p className="text-sm text-gray-600 text-center leading-snug">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2 w-full">
          <Link href="/contact" className="inline-block">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-3 rounded-full shadow transition flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <Link href="/services" className="inline-block">
            <button className="border-2 border-blue-500 text-blue-600 font-semibold text-lg px-8 py-3 rounded-full shadow hover:bg-blue-50 transition">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;