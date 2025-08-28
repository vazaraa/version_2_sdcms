'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { homepageClients } from '@/data/clients';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import StatsCounter from './StatsCounter';

const ClientsScroller = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scroller = scrollerRef.current;
    const scrollerContent = scroller.querySelector('.scroller-content') as HTMLElement;
    
    if (!scrollerContent) return;

    // Set min-width to fit all cards in a row
    scrollerContent.style.minWidth = 'max-content';

    // Clone the content for seamless infinite scroll
    const clone = scrollerContent.cloneNode(true) as HTMLElement;
    clone.classList.add('scroller-clone');
    scroller.appendChild(clone);

    // Calculate the total width of one set of cards
    const cardWidth = scrollerContent.offsetWidth;

    // Create the infinite scroll animation
    const tl = gsap.timeline({
      repeat: -1,
      ease: "none"
    });

    tl.to([scrollerContent, clone], {
      x: -cardWidth,
      duration: 30, // Adjust speed as needed
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % cardWidth)
      }
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
      if (clone && clone.parentNode) clone.parentNode.removeChild(clone);
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
        <TooltipProvider>
        <div ref={scrollerRef} className="scroller relative overflow-hidden flex items-center">
          <div className="scroller-content flex flex-nowrap items-center space-x-8 w-auto" style={{ minWidth: 'max-content' }}>
            {homepageClients.map((client, idx) => (
              <div key={idx} className="client-card flex-shrink-0 w-80 h-56 bg-card rounded-lg p-8 shadow-lg flex flex-col items-center justify-center">
                <img
                  src={typeof client.src === 'string' ? client.src : client.src.src}
                  alt={client.alt}
                  className="w-20 h-20 object-contain rounded-full mb-4 border border-muted"
                  loading="lazy"
                />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <h3 className="font-semibold text-center text-foreground text-lg mb-2 text-ellipsis overflow-hidden whitespace-nowrap w-full">
                      {client.name}
                    </h3>
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>{client.name}</span>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
        </TooltipProvider>

        {/* Stats */}
        <div className="mt-16 fade-in">
          <StatsCounter
            stats={[
              { value: 200, suffix: '+', label: 'Happy Clients' },
              { value: 500, suffix: '+', label: 'Projects Completed' },
              { value: 15, suffix: '+', label: 'Years Experience' },
              { value: 98, suffix: '%', label: 'Client Satisfaction' }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ClientsScroller;