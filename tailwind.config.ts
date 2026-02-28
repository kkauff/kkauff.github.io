import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted:      "var(--muted)",
        subtle:     "var(--subtle)",
        accent:     "var(--accent)",
        name:       "var(--name)",
        section:    "var(--section)",
        link:       "var(--link)",
      },
    },
  },
  plugins: [],
};
export default config;
