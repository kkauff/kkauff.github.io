"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Fade from "@mui/material/Fade";
import { content } from "./content";

export default function ProjectsSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {content.projects.map((project, i) => (
        <Fade
          key={project.name}
          in={visible}
          timeout={600}
          style={{ transitionDelay: `${i * 120}ms` }}
        >
          <div
            className="rounded-2xl p-5"
            style={{
              border: "1px solid var(--subtle)",
              background: "var(--background)",
            }}
          >
            {/* Header: logo + name + tagline */}
            <div className="flex items-center gap-4 mb-3">
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                width={56}
                height={56}
                className="rounded-xl flex-shrink-0"
                style={{ width: 56, height: 56 }}
              />
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

            {/* Description */}
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.9rem",
                lineHeight: 1.55,
                margin: "0 0 16px",
              }}
            >
              {project.description}
            </p>

            {/* Primary CTA + secondary links */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href={project.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.primary.label} — ${project.name}`}
                className="hover:opacity-90 transition-opacity"
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
              </a>

              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} — ${link.label}`}
                  className="hover:underline"
                  style={{
                    color: "var(--link)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Note */}
            {project.note && (
              <p
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
          </div>
        </Fade>
      ))}
    </div>
  );
}
