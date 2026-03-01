"use client";

import Avatar from "@mui/material/Avatar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function SocialButtons() {
  return (
    <>
      {/* GitHub — 6:45 (202.5°) */}
      <a
        href="https://github.com/kkauff/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        style={{
          position: "absolute",
          top: 196,
          left: 66,
          textDecoration: "none",
        }}
      >
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: "var(--background)",
            border: "2px solid var(--subtle)",
            transition: "border-color 0.15s",
            "&:hover": { borderColor: "var(--link)" },
          }}
        >
          <GitHubIcon sx={{ fontSize: 16, color: "var(--foreground)" }} />
        </Avatar>
      </a>

      {/* LinkedIn — 7:30 (225°) */}
      <a
        href="https://www.linkedin.com/in/kkauff/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        style={{
          position: "absolute",
          top: 175,
          left: 33,
          textDecoration: "none",
        }}
      >
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: "var(--background)",
            border: "2px solid var(--subtle)",
            transition: "border-color 0.15s",
            "&:hover": { borderColor: "var(--link)" },
          }}
        >
          <LinkedInIcon sx={{ fontSize: 16, color: "#0077B5" }} />
        </Avatar>
      </a>
    </>
  );
}
