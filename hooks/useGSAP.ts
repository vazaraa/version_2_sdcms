'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAP = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const has = (selector: string) => (gsap.utils.toArray(selector) as Element[]).length > 0;

      // Fade in animations
      has('.fade-in') && gsap.fromTo('.fade-in', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.fade-in',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Slide in from left
      has('.slide-in-left') && gsap.fromTo('.slide-in-left',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.slide-in-left',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Slide in from right
      has('.slide-in-right') && gsap.fromTo('.slide-in-right',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.slide-in-right',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Scale in animations
      has('.scale-in') && gsap.fromTo('.scale-in',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.scale-in',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
};