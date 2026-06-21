"use client";

import { useEffect, useRef, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckIcon from "@mui/icons-material/Check";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const THEMES = [
  { id: "classicLight", label: "Classic", hint: "clean light" },
  { id: "fluxLight", label: "Flux", hint: "warm sunset" },
  { id: "motionDark", label: "Motion", hint: "neon dark" },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

export default function ThemeSwitcher() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeId>("classicLight");
  const ref = useRef<HTMLDivElement>(null);

  // Sync local state with whatever was applied (default, or restored from
  // localStorage by the inline script in layout.tsx).
  useEffect(() => {
    const current = document.documentElement.getAttribute(
      "data-theme",
    ) as ThemeId | null;
    if (current) setTheme(current);
  }, []);

  // Dismiss on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function pick(id: ThemeId) {
    setTheme(id);
    document.documentElement.setAttribute("data-theme", id);
    try {
      localStorage.setItem("theme", id);
    } catch {
      // ignore storage failures (private mode, etc.)
    }
    setOpen(false);
  }

  return (
    <motion.div
      ref={ref}
      style={{ position: "relative", flexShrink: 0, marginRight: -18 }}
      initial={reduce ? false : { opacity: 0, scale: 0.8 }}
      animate={reduce ? undefined : { opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.5 }}
    >
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Switch color theme"
        aria-haspopup="menu"
        aria-expanded={open}
        whileHover={{ rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        style={{
          display: "block",
          padding: 4,
          border: "none",
          background: "transparent",
          cursor: "pointer",
          lineHeight: 0,
        }}
      >
        <SettingsIcon
          sx={{
            fontSize: 24,
            color: "var(--muted)",
            transition: "color 0.15s",
            "&:hover": { color: "var(--link)" },
          }}
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="menu"
            aria-label="Color theme"
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              top: 40,
              left: 0,
              transformOrigin: "top left",
              margin: 0,
              padding: 6,
              listStyle: "none",
              width: 184,
              lineHeight: 1.3,
              background: "var(--background)",
              border: "1px solid var(--subtle)",
              borderRadius: 12,
              boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
              zIndex: 50,
            }}
          >
            {THEMES.map((t) => {
              const active = theme === t.id;
              return (
                <li key={t.id}>
                  <button
                    type="button"
                    role="menuitemradio"
                    aria-checked={active}
                    onClick={() => pick(t.id)}
                    className="theme-option"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "8px 10px",
                      border: "none",
                      borderRadius: 8,
                      background: "transparent",
                      cursor: "pointer",
                      textAlign: "left",
                      color: "var(--foreground)",
                      fontFamily: "inherit",
                    }}
                  >
                    <span style={{ display: "flex", flexDirection: "column" }}>
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          lineHeight: 1.3,
                        }}
                      >
                        {t.label}
                      </span>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "var(--muted)",
                          lineHeight: 1.3,
                        }}
                      >
                        {t.hint}
                      </span>
                    </span>
                    {active && (
                      <CheckIcon
                        sx={{ fontSize: 16, color: "var(--link)" }}
                        aria-hidden
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
