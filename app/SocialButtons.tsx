"use client";

import type { CSSProperties } from "react";
import Avatar from "@mui/material/Avatar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Both icons rest on a circle of radius 100px around the photo's center.
// They start at the top (12 o'clock) and orbit clockwise into their final
// angles, settling with a slight overshoot. The inner counter-rotation keeps
// each icon upright throughout the sweep.
const ORBIT_RADIUS = 100;

function orbitStyle(endDeg: number, delay: string): CSSProperties {
  return {
    position: "absolute",
    top: 104,
    left: 104,
    transform: `rotate(${endDeg}deg) translateY(-${ORBIT_RADIUS}px) rotate(${-endDeg}deg)`,
    textDecoration: "none",
    // CSS custom properties consumed by the orbitIn keyframes.
    ["--orbit-start" as string]: "360deg",
    ["--orbit-end" as string]: `${endDeg}deg`,
    animationDelay: delay,
  };
}

const avatarSx = {
  width: 32,
  height: 32,
  bgcolor: "var(--background)",
  border: "2px solid var(--subtle)",
  transition: "border-color 0.15s",
  "&:hover": { borderColor: "var(--link)" },
} as const;

export default function SocialButtons() {
  return (
    <>
      {/* GitHub — 6:45 (202.5°) */}
      <a
        href="https://github.com/kkauff/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="social-orbit"
        style={orbitStyle(202.5, "0.25s")}
      >
        <Avatar sx={avatarSx}>
          <GitHubIcon sx={{ fontSize: 16, color: "var(--foreground)" }} />
        </Avatar>
      </a>

      {/* LinkedIn — 7:30 (225°) */}
      <a
        href="https://www.linkedin.com/in/kkauff/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="social-orbit"
        style={orbitStyle(225, "0.4s")}
      >
        <Avatar sx={avatarSx}>
          <LinkedInIcon sx={{ fontSize: 16, color: "#0077B5" }} />
        </Avatar>
      </a>
    </>
  );
}
