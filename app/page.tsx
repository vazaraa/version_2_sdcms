"use client";

import React, { useEffect } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesPreview from "@/components/ServicesPreview";
import ClientsScroller from "@/components/ClientsScroller";
import CompaniesPreview from '@/components/CompaniesPreview';
import ProjectsOverview from "@/components/ProjectsOverview";

export default function Home() {
  const containerRef = useGSAP();

  return (
    <div ref={containerRef} className="bg-brand-cream">
      <Hero />
      <AboutSection />
      {/* <ServicesPreview /> */}
      <ClientsScroller />
      {/* <CompaniesPreview /> */}
    </div>
  );
}
