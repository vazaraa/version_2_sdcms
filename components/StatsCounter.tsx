'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

interface StatsCounterProps {
  stats: StatItem[];
  className?: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ stats, className = '' }) => {
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasIntersected) {
            console.log('Stats section is now visible! Triggering animations...');
            setHasIntersected(true);
          }
        });
      },
      {
        threshold: 0.05, // Lower threshold to trigger earlier
        rootMargin: '150px' // Larger margin to trigger earlier
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasIntersected]);

  return (
    <div 
      ref={elementRef}
      className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}
    >
      {stats.map((stat, index) => (
        <StatItem
          key={stat.label}
          stat={stat}
          index={index}
          shouldAnimate={hasIntersected}
        />
      ))}
    </div>
  );
};

interface StatItemProps {
  stat: StatItem;
  index: number;
  shouldAnimate: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ stat, index, shouldAnimate }) => {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (shouldAnimate && !startedRef.current) {
      console.log(`Starting animation for ${stat.label}: ${stat.value} (index: ${index})`);
      // Mark as started immediately so we don't reschedule and accidentally clear this timeout
      startedRef.current = true;
      
      // Simple delay calculation - each stat starts 200ms after the previous
      const delay = index * 200;
      
      console.log(`Setting timeout for ${stat.label} with delay: ${delay}ms (index: ${index})`);
      
      const timeoutId = setTimeout(() => {
        console.log(`Executing animation for ${stat.label} after ${delay}ms delay`);
        
        // Use a simple loop with setTimeout for more reliable state updates
        let currentCount = 0;
        const stepSize = Math.max(1, Math.ceil(stat.value / 30)); // 30 steps for smooth animation
        
        const animate = () => {
          currentCount += stepSize;
          
          if (currentCount >= stat.value) {
            currentCount = stat.value;
            setCount(currentCount);
            console.log(`Animation completed for ${stat.label}: ${stat.value}`);
            return;
          }
          
          setCount(currentCount);
          console.log(`${stat.label}: count=${currentCount}/${stat.value}`);
          
          // Continue animation
          setTimeout(animate, 67); // ~15 FPS for smooth animation
        };
        
        // Start the animation
        animate();
      }, delay);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [shouldAnimate, stat.value, index]);

  return (
    <div className="text-center group">
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2 transition-all duration-300 group-hover:scale-110">
        {count}{stat.suffix || '+'}
      </div>
      <div className="text-muted-foreground text-sm md:text-base">
        {stat.label}
      </div>
    </div>
  );
};

export default StatsCounter;
