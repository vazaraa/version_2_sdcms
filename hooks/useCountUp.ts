import { useState, useEffect, useRef, useCallback } from 'react';

interface UseCountUpProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  enabled?: boolean;
}

export const useCountUp = ({ 
  end, 
  start = 0, 
  duration = 2000, 
  delay = 0,
  enabled = true 
}: UseCountUpProps) => {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const startAnimation = useCallback(() => {
    if (!enabled || isAnimating) return;
    
    setIsAnimating(true);
    const startTime = Date.now();
    startTimeRef.current = startTime;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + (end - start) * easeOutQuart);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        setIsAnimating(false);
      }
    };

    // Add delay if specified
    if (delay > 0) {
      setTimeout(() => {
        animationRef.current = requestAnimationFrame(animate);
      }, delay);
    } else {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [end, start, duration, delay, enabled, isAnimating]);

  const reset = useCallback(() => {
    setCount(start);
    setIsAnimating(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  }, [start]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return { count, isAnimating, startAnimation, reset };
};

