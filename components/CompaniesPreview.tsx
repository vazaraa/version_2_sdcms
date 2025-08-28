// "use client";

// import React, { useRef, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {
//   ArrowRight,
//   Building2,
//   Leaf,
//   Monitor,
//   GraduationCap,
//   Heart,
// } from "lucide-react";
// import { companies } from "@/data/companies";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const getIcon = (iconName: string) => {
//   switch (iconName) {
//     case "Building2":
//       return Building2;
//     case "Leaf":
//       return Leaf;
//     case "Monitor":
//       return Monitor;
//     case "GraduationCap":
//       return GraduationCap;
//     case "Heart":
//       return Heart;
//     default:
//       return Building2;
//   }
// };

// const CompaniesPreview = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const pinWrapRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const pinWrap = pinWrapRef.current;
//     if (!section || !pinWrap) return;

//     // Only enable GSAP pinning/scroll on md+ screens
//     let ctx: any = null;
//     if (window.innerWidth >= 768) {
//       const totalWidth = pinWrap.scrollWidth;
//       const horizontalScrollLength = totalWidth - window.innerWidth;
//       ctx = gsap.context(() => {
//         gsap.to(pinWrap, {
//           x: -horizontalScrollLength,
//           ease: "none",
//           scrollTrigger: {
//             trigger: section,
//             start: "top top",
//             end: () => `+=${totalWidth}`,
//             pin: true,
//             scrub: true,
//             anticipatePin: 1,
//           },
//         });
//       }, section);
//     }
//     return () => { if (ctx) ctx.revert(); };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="sectionPin"
//       className="relative w-full bg-background text-foreground"
//       style={{ overflow: "hidden" }}
//     >
//       <h2 className="text-4xl md:text-5xl font-bold mb-4 px-8 pt-16">
//         Our Group Companies
//       </h2>
//       {/* Desktop: horizontal scroll, Mobile: grid/stack */}
//       <div
//         ref={pinWrapRef}
//         className="pin-wrap flex-col md:flex md:flex-row items-center gap-8 md:gap-16 px-2 md:px-[10vw] h-auto md:h-[100vh] grid grid-cols-1 sm:grid-cols-1 gap-y-8 md:grid-cols-none"
//       >
//         {companies.map((company) => {
//           const Icon = getIcon(company.icon);
//           return (
//             <div
//               key={company.id}
//               className="w-full md:min-w-[90vw] md:max-w-[60vw] h-auto md:h-[60vh] bg-background dark:bg-[#111] flex flex-col md:grid md:grid-cols-2 gap-4 items-center rounded-xl shadow-lg p-2 md:p-[0_5vw]"
//             >
//               {/* Image (md+) */}
//               <div className="w-full flex justify-center items-center mb-4 md:mb-0 hidden md:flex">
//                 <Image
//                   src={company.image}
//                   alt={`Image of ${company.name}`}
//                   className="object-contain max-h-[180px] max-w-[80%] rounded-lg"
//                   width={300}
//                   height={180}
//                 />
//               </div>
//               {/* Text Content */}
//               <div className="flex flex-col justify-center items-start px-0 md:px-8 w-full">
//                 <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-8 leading-tight">
//                   {company.name}
//                 </h2>
//                 <p className="text-lg md:text-2xl font-light mb-2 md:mb-6">
//                   {company.specialization}
//                 </p>
//                 <p className="text-base md:text-xl font-light mb-4 md:mb-6 max-w-2xl">
//                   {company.description}
//                 </p>
//                 <Link href={`/group-companies/${company.slug}`} passHref>
//                   <Button
//                     variant="outline"
//                     size="lg"
//                     className="group mt-2 md:mt-4 flex items-center gap-2"
//                   >
//                     Learn More
//                     <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default CompaniesPreview;


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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;
    const progressBar = progressRef.current;

    if (!section || !scrollContainer || !progressBar) return;

    let ctx: any = null;

    if (window.innerWidth >= 768) {
      const totalScrollWidth = scrollContainer.scrollWidth;
      const scrollLength = totalScrollWidth - window.innerWidth;

      ctx = gsap.context(() => {
        // Pin and scroll horizontally
        gsap.to(scrollContainer, {
          x: -scrollLength,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalScrollWidth}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            onUpdate: (self) => {
              progressBar.style.width = `${self.progress * 100}%`;
            },
          },
        });
      }, section);
    }

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-background text-foreground overflow-hidden"
    >
      {/* Progress Bar */}
      <div className="sticky top-0 z-50 h-1 w-full bg-muted">
        <div
          ref={progressRef}
          className="h-full bg-green-500 transition-all ease-linear duration-200"
          style={{ width: "0%" }}
        ></div>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold mb-4 px-8 pt-16">
        Our Group Companies
      </h2>

      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex md:flex-row flex-col md:h-[100vh] md:items-center md:space-x-12 px-4 md:px-[10vw]"
        style={{
          width: "max-content",
        }}
      >
        {companies?.length > 0 ? (
          companies.map((company) => {
            const Icon = getIcon(company.icon);
            return (
              <div
                key={company.id}
                className="company-card w-full md:min-w-[80vw] md:max-w-[60vw] h-auto md:h-[60vh] bg-background dark:bg-[#111] flex flex-col md:grid md:grid-cols-2 gap-4 items-center rounded-xl shadow-lg p-4 md:p-[0_5vw] md:m-10"
              >
                {/* Image */}
                <div className="w-full flex justify-center items-center mb-4 md:mb-0 hidden md:flex">
                  <Image
                    src={company.image}
                    alt={`${company.name} - company overview`}
                    className="object-contain max-h-[180px] max-w-[80%] rounded-lg"
                    width={300}
                    height={180}
                    priority
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center items-start px-0 md:px-8 w-full">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-8 leading-tight">
                    {company.name}
                  </h2>
                  <p className="text-lg md:text-2xl font-light mb-2 md:mb-6">
                    {company.specialization}
                  </p>
                  <p className="text-base md:text-xl font-light mb-4 md:mb-6 max-w-2xl">
                    {company.description}
                  </p>
                  <Link href={`/group-companies/${company.slug}`} passHref>
                    <Button
                      variant="outline"
                      size="lg"
                      className="group mt-2 md:mt-4 flex items-center gap-2"
                    >
                      Learn More
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-xl text-center">No companies to show.</p>
        )}
      </div>
    </section>
  );
};

export default CompaniesPreview;
