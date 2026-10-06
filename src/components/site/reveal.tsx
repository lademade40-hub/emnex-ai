"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/** Smooth editorial fade-and-rise when the block scrolls into view. */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

type MaskLineProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/** Cinematic masked line reveal for display headlines.
 *  Observes the outer (untransformed) line box — the inner span is clipped by
 *  overflow-hidden, so observing the inner element would never intersect. */
export function MaskLine({ children, delay = 0, className }: MaskLineProps) {
  const reduce = useReducedMotion();
  const lineRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(lineRef, { once: true, margin: "-40px 0px" });

  if (reduce) {
    return <span className={`block ${className ?? ""}`}>{children}</span>;
  }

  return (
    <span ref={lineRef} className={`block overflow-hidden ${className ?? ""}`}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: "112%" }}
        animate={inView ? { y: "0%" } : undefined}
        transition={{ duration: 1.05, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export { EASE };
