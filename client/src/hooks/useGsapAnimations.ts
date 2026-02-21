/**
 * GSAP Animation Hooks
 * Reusable animation patterns for premium interactions
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade in + slide up animation on mount
 */
export const useFadeInUp = (delay = 0) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay }
      );
    }
  }, [delay]);

  return ref;
};

/**
 * Staggered children animation
 */
export const useStaggerChildren = (delay = 0) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          delay,
        }
      );
    }
  }, [delay]);

  return ref;
};

/**
 * Scroll trigger reveal animation
 */
export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return ref;
};

/**
 * Parallax effect on scroll
 */
export const useParallax = (speed = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        y: () => window.innerHeight * speed,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          markers: false,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [speed]);

  return ref;
};

/**
 * Hover scale animation
 */
export const useHoverScale = (scale = 1.05) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEnter = () => {
      gsap.to(element, {
        scale,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [scale]);

  return ref;
};

/**
 * Slide in from left or right when scrolled into view
 */
export const useSlideIn = (
  direction: 'left' | 'right' = 'left',
  distance = 80,
  delay = 0
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const from = { opacity: 0, x: direction === 'left' ? -distance : distance };
      gsap.fromTo(
        ref.current,
        from,
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay,
          scrollTrigger: {
            trigger: ref.current,
              start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [direction, distance, delay]);

  return ref;
};

/**
 * Staggered scroll reveal for lists
 */
export const useStaggerScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
              start: 'top 85%',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return ref;
};

/**
 * Counter animation (for stats)
 */
export const useCounterAnimation = (
  target: number,
  duration = 2,
  decimals = 0,
  suffix = ''
) => {
  const ref = useRef<HTMLDivElement>(null);
  const counterRef = useRef({ value: 0 });

  useEffect(() => {
    if (ref.current) {
      const tween = gsap.to(counterRef.current, {  // ✅ store the tween
        value: target,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        onUpdate: () => {
          if (ref.current) {
            const val = counterRef.current.value;
            const formatted = decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toString();
            const display = decimals > 0 ? formatted : Number(formatted).toLocaleString();
            ref.current.textContent = `${display}${suffix}`;
          }
        },
      });

      return () => {
        tween.scrollTrigger?.kill();  // ✅ only kills THIS trigger
        tween.kill();
      };
    }
  }, [target, duration, decimals, suffix]);

  return ref;
};