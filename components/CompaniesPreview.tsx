"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Lenis from "@studio-freight/lenis";
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

    let ctx = gsap.context(() => {
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

    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      ctx.revert();
    };
  }, []);

  const divref = useRef<(HTMLDivElement | null)[]>([]);
  const divContainerRef = useRef<(HTMLDivElement | null)[]>([]);

  let companyDivs = [];

  for (let i = 1; i <= 7; i++) {
    companyDivs.push(
      <div
        className="w-[100vh] shrink-0 rounded-3xl overflow-hidden bg-white m-10"
        ref={(ref) => (divContainerRef.current[i - 1] = ref)}
      >
        <h1 className="w-full ">Company</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, earum
          eum natus eaque hic velit dicta, rem exercitationem nisi saepe beatae!
          Nihil vero perferendis facere aliquam sed similique itaque tempore!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, earum
          eum natus eaque hic velit dicta, rem exercitationem nisi saepe beatae!
          Nihil vero perferendis facere aliquam sed similique itaque tempore!
        </p>
      </div>
    );
  }

  return (
    <>
      <section
        ref={sectionRef}
        id="sectionPin"
        className="relative w-full min-h-screen bg-[#111] text-[#b9b3a9]"
        style={{ overflow: "hidden" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 px-8 pt-16 text-[#b9b3a9]">
          Our Group Companies
        </h2>
        <div
          ref={pinWrapRef}
          className="pin-wrap flex items-center gap-16 px-[10vw]"
          style={{ height: "100vh", paddingTop: 0, paddingBottom: 0 }}
        >
          {companies.map((company, idx) => {
            const Icon = getIcon(company.icon);
            return (
              <div
                key={company.id}
                className="min-w-[60vw] max-w-[60vw] h-[80vh] bg-[#111] grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-xl"
                style={{ padding: "0 5vw" }}
              >
                {/* Left: Text */}
                <div className="flex flex-col justify-center items-start text-left px-0 md:px-8">
                  <h2
                    className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
                    style={{ color: "#b9b3a9" }}
                  >
                    {company.name}
                  </h2>
                  <p
                    className="text-2xl md:text-3xl font-light mb-8"
                    style={{ color: "#b9b3a9" }}
                  >
                    {company.specialization}
                  </p>
                  <p
                    className="text-xl md:text-2xl font-light mb-8 max-w-2xl"
                    style={{ color: "#b9b3a9" }}
                  >
                    {company.description}
                  </p>
                  <Button variant="outline" size="lg" className="group mt-4">
                    <Link
                      href={`/group-companies/${company.slug}`}
                      className="flex items-center gap-2"
                    >
                      Learn More
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                {/* Right: Image */}
                <div className="flex items-center justify-center h-full w-full relative">
                  <img
                    src={company.image}
                    alt={company.name}
                    className="object-cover w-full h-[80vh] rounded-md shadow-lg"
                    style={{ background: "#222" }}
                  />
                  <div className="absolute top-4 left-4">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full ${company.color} text-white`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Est. {company.established}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* <main className="bg-[#010101] w-full overflow-x-hidden">
        <section className="min-h-fit flex justify-center items-center m-20">
          <h1 className="font-bold text-8xl text-white">
            Our Group of companies
          </h1>
        </section>
        <section
          className="min-h-fit flex flex-nowrap items-center space-x-10 px-20 m-10"
        >
          {companyDivs}
        </section>
      </main> */}
    </>
  );
};

export default CompaniesPreview;
