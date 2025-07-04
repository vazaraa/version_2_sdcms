"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  Leaf,
  Monitor,
  GraduationCap,
  Heart,
} from "lucide-react";
import { companies } from "@/data/companies";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Building2":
      return Building2;
    case "Leaf":
      return Leaf;
    case "Monitor":
      return Monitor;
    case "GraduationCap":
      return GraduationCap;
    case "Heart":
      return Heart;
    default:
      return Building2;
  }
};

const CompaniesPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pinWrap = pinWrapRef.current;
    if (!section || !pinWrap) return;

    const totalWidth = pinWrap.scrollWidth;
    const horizontalScrollLength = totalWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(pinWrap, {
        x: -horizontalScrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sectionPin"
      className="relative w-full min-h-screen bg-background text-foreground"
      style={{ overflow: "hidden" }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 px-8 pt-16">
        Our Group Companies
      </h2>
      <div
        ref={pinWrapRef}
        className="pin-wrap flex items-center gap-16 px-[10vw]"
        style={{ height: "100vh" }}
      >
        {companies.map((company) => {
          const Icon = getIcon(company.icon);
          return (
            <div
              key={company.id}
              className="min-w-[90vw] max-w-[60vw] h-[60vh] bg-background dark:bg-[#111] grid grid-cols-1 md:grid-cols-2 gap-4 items-center rounded-xl shadow-lg p-[0_5vw]"
            >
              {/* Left: Text Content */}
              <div className="flex flex-col justify-center items-start px-0 md:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  {company.name}
                </h2>
                <p className="text-2xl md:text-3xl font-light mb-6">
                  {company.specialization}
                </p>
                <p className="text-xl md:text-2xl font-light mb-6 max-w-2xl">
                  {company.description}
                </p>
                <Link href={`/group-companies/${company.slug}`} passHref>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group mt-4 flex items-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Right: Image & Badges */}
              <div className="relative w-full h-[60vh] rounded-md shadow-lg bg-muted overflow-hidden">
                <Image
                  src={company.image}
                  alt={`Image of ${company.name}`}
                  className="object-cover w-full h-full"
                  width={800}
                  height={800}
                />
                <div className="absolute top-4 left-4">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${company.color} text-white`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-medium shadow">
                    Est. {company.established}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CompaniesPreview;
