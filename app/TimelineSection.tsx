"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { content } from "./content";
import { EASE_OUT } from "./motion-primitives";

const DATE_W = 92; // px — left rail for the "when" label
const MARKER_W = 24; // px — column the dot + line live in
const LINE_LEFT = DATE_W + MARKER_W / 2 - 0.5;

const STAGGER = 0.22; // s between entries
const DELAY = 0.15; // s before the first entry

// Row is just a hover-propagation container; children define the real motion.
const rowVariants: Variants = { hidden: {}, show: {}, hover: {} };

const dateVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

const dotVariants: Variants = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { type: "spring", stiffness: 420, damping: 16 },
  },
  hover: {
    scale: 1.45,
    transition: { type: "spring", stiffness: 400, damping: 14 },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, x: 16, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE_OUT, delay: 0.05 },
  },
  hover: { x: 4, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

export default function TimelineSection() {
  const reduce = useReducedMotion();
  const items = [...content.timeline].reverse();
  // The accent line "writes" downward over roughly the time the entries appear.
  const lineDuration = DELAY + items.length * STAGGER;

  return (
    <motion.div
      className="relative"
      initial={reduce ? false : { opacity: 0, y: 8 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
    >
      {/* Faint base rail */}
      <div
        aria-hidden
        className="absolute w-px"
        style={{
          left: LINE_LEFT,
          top: 8,
          bottom: 28,
          background: "var(--subtle)",
        }}
      />
      {/* Accent line drawn top-to-bottom over time, like it's being written */}
      <motion.div
        aria-hidden
        className="absolute w-px origin-top"
        style={{
          left: LINE_LEFT,
          top: 8,
          bottom: 28,
          background: "var(--accent)",
        }}
        initial={reduce ? false : { scaleY: 0 }}
        whileInView={reduce ? undefined : { scaleY: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: lineDuration, ease: "easeInOut" }}
      />

      {/* Entries appear in sequence as the line passes them */}
      <motion.div
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ staggerChildren: STAGGER, delayChildren: DELAY }}
      >
        {items.map((item) => (
          <motion.div
            key={`${item.when}-${item.what}`}
            className="relative flex"
            variants={reduce ? undefined : rowVariants}
            whileHover={reduce ? undefined : "hover"}
          >
            <motion.div
              className="shrink-0 text-right"
              style={{
                width: DATE_W,
                paddingRight: 12,
                paddingTop: 4,
                color: "var(--muted)",
                fontSize: "0.8rem",
                fontWeight: 500,
              }}
              variants={reduce ? undefined : dateVariants}
            >
              {item.when}
            </motion.div>

            <div
              className="relative shrink-0 flex justify-center"
              style={{ width: MARKER_W }}
            >
              <motion.span
                className="block rounded-full"
                style={{
                  width: 12,
                  height: 12,
                  marginTop: 6,
                  background: "var(--accent)",
                  boxShadow: "0 0 0 4px var(--background)",
                }}
                variants={reduce ? undefined : dotVariants}
              />
            </div>

            <motion.div
              className="flex-1"
              style={{ paddingLeft: 12, paddingBottom: 20 }}
              variants={reduce ? undefined : contentVariants}
            >
              <p
                style={{
                  color: "var(--foreground)",
                  fontWeight: 600,
                  fontSize: "1.125rem",
                  margin: 0,
                }}
              >
                {item.what}
              </p>
              {item.link && (
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.875rem",
                    marginTop: 4,
                    marginBottom: 0,
                  }}
                >
                  Currently building the{" "}
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--link)" }}
                    className="hover:underline"
                  >
                    {item.link.label}
                  </a>
                </p>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
