"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

/**
 * Animated numeric counter — eases from 0 to target when scrolled into view.
 * Honors prefers-reduced-motion by rendering the final value directly.
 */
export function Counter({ target, duration = 2000, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo for a luxurious deceleration
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration, reduce]);

  const resolved = reduce ? target : value;
  const formatted = resolved >= 1000 ? resolved.toLocaleString("en-US") : `${resolved}`;

  return (
    <span ref={ref} className={className} aria-label={`${target.toLocaleString("en-US")}${suffix}`}>
      {formatted}
      {suffix}
    </span>
  );
}
