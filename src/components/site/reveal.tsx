"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

/**
 * Elegant scroll-into-view reveal — fade + rise, staggered by delay.
 */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  duration = 0.9,
  className,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const parentVariants: Variants = {
  hidden: {},
  visible: (i: number) => ({
    transition: { staggerChildren: 0.09, delayChildren: 0.1 + i * 0.1 },
  }),
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: "110%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Line-by-line text reveal for large editorial headlines.
 * Wrap each line in <RevealLine>. Lines rise into place behind a soft mask.
 */
export function TextReveal({
  children,
  className,
  custom = 0,
}: {
  children: ReactNode;
  className?: string;
  custom?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={custom}
    >
      {children}
    </motion.div>
  );
}

export function RevealLine({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
      <motion.span className={`block will-change-transform ${className ?? ""}`} variants={lineVariants}>
        {children}
      </motion.span>
    </span>
  );
}
