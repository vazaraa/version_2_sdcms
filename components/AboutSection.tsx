'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AboutSection = () => {
  return (
    <section className="py-16 bg-brand-cream w-full">
      {/* About Header & Paragraph with Logo */}
      <div className="w-full max-w-6xl mx-auto px-4 mb-16 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        <div className="flex-1 flex flex-col items-start justify-center text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About SDC Management Solutions
            </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            SDC Management, Vazrashri Industries, and Sri Durga Consultancy (founded in 2013) have been employing over 3,600 people across South India. With expertise spanning Pharmacy, Computing, and Business Administration, Company drives growth across E-Commerce, Food, Construction, Employment Services, Entertainment, Mining and Manufacturing—focused on sustainability and innovation.
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center justify-center lg:justify-end w-full lg:w-auto mt-10 lg:mt-0">
          <Image src="/images/logo.webp" alt="SDC Management Logo" width={180} height={90} className="object-contain max-w-[180px] w-full h-auto" />
        </div>
      </div>

      

      {/* Leadership Excellence */}
      {/* <div className="w-full flex justify-center py-10 px-2">
        <div className="w-full max-w-5xl rounded-2xl shadow-lg bg-[url('/images/services/construction-bg.webp')] bg-cover bg-center relative overflow-hidden flex flex-col md:flex-row items-stretch backdrop-blur-md" style={{backgroundColor: 'rgba(30,41,59,0.85)'}}>
          <div className="absolute inset-0 bg-gray-900/70" />
          <div className="relative z-10 flex-1 flex flex-col justify-center p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Leadership Excellence</h2>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118A7.5 7.5 0 0112 15.75a7.5 7.5 0 017.5 4.368" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold">Mr. Venkat</div>
                <div className="text-sm opacity-80">Founder & Managing Director</div>
              </div>
            </div>
            <div className="text-sm md:text-base opacity-90">
              With over 15 years of industry experience, Mr. Venkat has been instrumental in establishing SDC Management Solutions as a trusted partner for businesses across India.
            </div>
          </div>
          <div className="relative z-10 flex-1 flex flex-col justify-center p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-400" /> Successfully managed 500+ client projects</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-400" /> Expanded operations to 5 major cities</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-400" /> Built a team of 1000+ professionals</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-400" /> Maintained 98% client satisfaction rate</li>
            </ul>
          </div>
          
        </div>
      </div> */}
    </section>
  );
};

export default AboutSection;