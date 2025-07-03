'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const govClients = [
  {
    name: "Cement Corporation of India, Tandur",
    src: "/images/GOV-SECTOR/cci.jpg",
    alt: "Cement Corporation of India Tandur"
  },
  {
    name: "Greater Visakhapatnam Municipal Corporation, Visakhapatnam",
    src: "/images/GOV-SECTOR/visakhapatanam municap corporation.jpg",
    alt: "Greater Visakhapatnam Municipal Corporation"
  },
  {
    name: "Polavaram Project Authority, Hyderabad",
    src: "/images/GOV-SECTOR/PLAVARAMAUTHORITY.jpg",
    alt: "Polavaram Project Authority Hyderabad"
  },
  {
    name: "Endowments Department, Andhra Pradesh",
    src: "/images/GOV-SECTOR/andhra-pradesh-endowments-department.jpg",
    alt: "Endowments Department Andhra Pradesh"
  },
  {
    name: "APMSIDC IT Park, Mangalagiri",
    src: "/images/GOV-SECTOR/apmsidc.jpg",
    alt: "APMSIDC IT Park Mangalagirl"
  },
  {
    name: "GGH Guntur",
    src: "/images/GOV-SECTOR/GGH.jpg",
    alt: "GGH Guntur"
  },
  {
    name: "APCRDA Amaravathi",
    src: "/images/GOV-SECTOR/apcrda.jpg",
    alt: "APCRDA Amaravthi"
  },
  {
    name: "Military Engineer Services, Secunderabad",
    src: "/images/GOV-SECTOR/MES-Military-Engineer-Services-logo.jpg",
    alt: "Military Engineer Services Secunderabad"
  },
  {
    name: "Tobacco Board, AP",
    src: "/images/GOV-SECTOR/tobocco board.jpg",
    alt: "Tobacco Board AP"
  }
];

const ClientsScroller = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scroller = scrollerRef.current;
    const scrollerContent = scroller.querySelector('.scroller-content') as HTMLElement;
    
    if (!scrollerContent) return;

    // Clone the content for seamless infinite scroll
    const clone = scrollerContent.cloneNode(true) as HTMLElement;
    scroller.appendChild(clone);

    // Calculate the total width of one set of cards
    const cardWidth = scrollerContent.offsetWidth;
    
    // Create the infinite scroll animation
    const tl = gsap.timeline({
      repeat: -1,
      ease: "none"
    });

    tl.to(scrollerContent, {
      x: -cardWidth,
      duration: 30, // Adjust speed as needed
      ease: "none"
    });

    // Pause animation on hover
    const pauseAnimation = () => tl.pause();
    const resumeAnimation = () => tl.resume();

    scroller.addEventListener('mouseenter', pauseAnimation);
    scroller.addEventListener('mouseleave', resumeAnimation);

    return () => {
      tl.kill();
      scroller.removeEventListener('mouseenter', pauseAnimation);
      scroller.removeEventListener('mouseleave', resumeAnimation);
    };
  }, []);

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We've had the privilege of working with amazing organizations across various industries, 
              helping them achieve their goals and drive meaningful change.
            </p>
          </div>
        </div>

        {/* Single Row Infinite Scrolling Client Cards */}
        <div ref={scrollerRef} className="scroller relative overflow-hidden flex items-center">
          <div className="scroller-content flex flex-nowrap items-center space-x-8 w-auto">
            {govClients.map((client, idx) => (
              <div key={idx} className="client-card flex-shrink-0 w-80 bg-card rounded-lg p-8 shadow-lg flex flex-col items-center justify-center">
                <img
                  src={client.src}
                  alt={client.alt}
                  className="w-20 h-20 object-contain rounded-full mb-4 border border-muted"
                  loading="lazy"
                />
                <h3 className="font-semibold text-center text-foreground text-lg mb-2">{client.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 fade-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsScroller;