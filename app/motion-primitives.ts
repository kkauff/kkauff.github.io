// Shared motion tokens so entrances and hovers feel consistent across sections.

// Soft "ease-out-quint" — feels expensive without being slow.
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const SOFT_SPRING = {
  type: "spring" as const,
  stiffness: 130,
  damping: 18,
  mass: 0.9,
};
