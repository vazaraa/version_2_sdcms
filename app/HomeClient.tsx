"use client";

import React from "react";
import { useGSAP } from "@/hooks/useGSAP";
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
import AboutSection from "@/components/AboutSection";
import ClientsScroller from "@/components/ClientsScroller";

export default function HomeClient() {
  const containerRef = useGSAP();

  return (
    <div ref={containerRef} className="bg-brand-cream">
      <Hero />
      {/* SEO intro: embed high-value keywords within first fold */}
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="sr-only">Manpower Outsourcing & Facility Management in Guntur</h1>
        <p className="text-base text-muted-foreground">
          SDC Management Solutions Private Limited (SDCMS) provides
          <strong> manpower outsourcing</strong>, <strong>HR outsourcing</strong>,
          <strong> facility management solutions</strong>,
          <strong> housekeeping and cleaning services</strong>, and
          <strong> payroll outsourcing</strong> across Guntur, Andhra Pradesh and South India.
          We are a trusted partner for government and corporate clients.
        </p>
        <div className="mt-3 text-sm">
          <a href="/services" className="text-primary font-medium hover:underline underline-offset-4 mr-4">manpower outsourcing services</a>
          <a href="/about" className="text-primary font-medium hover:underline underline-offset-4 mr-4">trusted HR outsourcing partner</a>
          <a href="/contact" className="text-primary font-medium hover:underline underline-offset-4">get a staffing quote in Guntur</a>
        </div>
      </div> */}
      <AboutSection />
      <ClientsScroller />
    </div>
  );
}


