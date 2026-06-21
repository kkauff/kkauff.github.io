"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT } from "./motion-primitives";

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="relative mb-8 pb-3">
      <motion.h2
        className="text-2xl font-semibold text-section"
        style={{ fontFamily: "var(--header-font)" }}
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        {children}
      </motion.h2>
      {/* Underline that draws in from the left */}
      <motion.span
        aria-hidden
        className="absolute bottom-0 left-0 h-px w-full origin-left"
        style={{ background: "var(--subtle)" }}
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={reduce ? undefined : { scaleX: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.1 }}
      />
    </div>
  );
}
