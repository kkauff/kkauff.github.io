"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import SocialButtons from "./SocialButtons";
import ThemeSwitcher from "./ThemeSwitcher";
import { EASE_OUT } from "./motion-primitives";

export default function Header({ name, bio }: { name: string; bio: string }) {
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
      {/* Profile image + orbiting social buttons */}
      <motion.div
        className="relative flex-shrink-0"
        style={{ width: 240, height: 240 }}
        initial={reduce ? false : { opacity: 0, scale: 0.7 }}
        animate={reduce ? undefined : { opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 16 }}
      >
        <motion.div
          whileHover={reduce ? undefined : { scale: 1.04, rotate: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="absolute"
          style={{ top: 40, left: 40 }}
        >
          <Image
            src="/profile.jpeg"
            alt={name}
            width={160}
            height={160}
            className="rounded-full object-cover"
            priority
          />
        </motion.div>

        <SocialButtons />
      </motion.div>

      <div className="flex-1 min-w-0 self-stretch sm:self-auto">
        <div className="flex items-center justify-between gap-6 mb-4">
          <motion.h1
            className="text-4xl font-bold text-name"
            style={{ fontFamily: "var(--header-font)" }}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            {name}
          </motion.h1>

          <ThemeSwitcher />
        </div>

        <motion.p
          className="text-muted leading-relaxed"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.35 }}
        >
          {bio}
        </motion.p>
      </div>
    </div>
  );
}
