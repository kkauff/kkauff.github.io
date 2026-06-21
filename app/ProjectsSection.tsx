"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import { content } from "./content";
import { SOFT_SPRING } from "./motion-primitives";

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: SOFT_SPRING,
  },
};

type Project = (typeof content.projects)[number];

function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Pointer position (0..1 across the card) drives the 3D tilt.
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), {
    stiffness: 220,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-7, 7]), {
    stiffness: 220,
    damping: 18,
  });

  // Raw pixel position for the spotlight gradient.
  const sx = useMotionValue(0);
  const sy = useMotionValue(0);
  const glow = useMotionValue(0);
  const glowSpring = useSpring(glow, { stiffness: 200, damping: 30 });
  const spotlight = useMotionTemplate`radial-gradient(240px circle at ${sx}px ${sy}px, color-mix(in srgb, var(--link) 16%, transparent), transparent 65%)`;

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
    sx.set(e.clientX - rect.left);
    sy.set(e.clientY - rect.top);
  }

  return (
    <motion.div variants={cardVariants} style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerEnter={() => glow.set(1)}
        onPointerLeave={() => {
          glow.set(0);
          px.set(0.5);
          py.set(0.5);
        }}
        whileHover={reduce ? undefined : { y: -4 }}
        className="project-card relative overflow-hidden rounded-2xl p-5"
        style={{
          border: "1px solid var(--subtle)",
          background: "var(--background)",
          rotateX: reduce ? 0 : rotateX,
          rotateY: reduce ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Cursor-tracking spotlight glow */}
        {!reduce && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{ background: spotlight, opacity: glowSpring }}
          />
        )}

        <div className="relative flex items-center gap-4 mb-3">
          <motion.div
            whileHover={reduce ? undefined : { scale: 1.12, rotate: -6 }}
            transition={{ type: "spring", stiffness: 320, damping: 12 }}
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              overflow: "hidden",
            }}
            className="flex-shrink-0"
          >
            {/* Logos are app-icon art with a transparent margin (and a baked-in
               white ring on Zenith) that reads as a stray border on dark themes.
               Scaling up inside the overflow-clipped tile crops it away. */}
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              width={56}
              height={56}
              style={{ width: 56, height: 56, transform: "scale(1.36)" }}
            />
          </motion.div>
          <div>
            <h3
              style={{
                color: "var(--name)",
                fontWeight: 700,
                fontSize: "1.25rem",
                fontFamily: "var(--header-font)",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {project.name}
            </h3>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.85rem",
                margin: "2px 0 0",
              }}
            >
              {project.tagline}
            </p>
          </div>
        </div>

        <p
          className="relative"
          style={{
            color: "var(--muted)",
            fontSize: "0.9rem",
            lineHeight: 1.55,
            margin: "0 0 16px",
          }}
        >
          {project.description}
        </p>

        <div className="relative flex flex-wrap items-center gap-x-4 gap-y-2">
          <motion.a
            href={project.primary.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.primary.label} — ${project.name}`}
            whileHover={reduce ? undefined : { scale: 1.05 }}
            whileTap={reduce ? undefined : { scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{
              display: "inline-block",
              background: "var(--link)",
              color: "var(--background)",
              fontWeight: 600,
              fontSize: "0.875rem",
              padding: "8px 18px",
              borderRadius: "9999px",
              textDecoration: "none",
            }}
          >
            {project.primary.label}
          </motion.a>

          {project.links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} — ${link.label}`}
              className="hover:underline"
              whileHover={reduce ? undefined : { x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              style={{
                color: "var(--link)",
                fontSize: "0.85rem",
                fontWeight: 500,
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {project.note && (
          <p
            className="relative"
            style={{
              color: "var(--muted)",
              fontSize: "0.78rem",
              margin: "12px 0 0",
              fontStyle: "italic",
            }}
          >
            {project.note}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <motion.div
      className="flex flex-col gap-6"
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
    >
      {content.projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </motion.div>
  );
}
