import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // ── Green (Bangladesh flag green) ─────────────────────────────
          green:         "#006A4E",
          "green-dark":  "#004d37",
          "green-light": "#00856A",
          "green-50":    "#E8F3EF",
          "green-100":   "#C4E0D4",
          "green-900":   "#002418",

          // ── Red (Bangladesh flag red) ──────────────────────────────────
          red:           "#F42A41",
          "red-dark":    "#C81830",
          "red-light":   "#FF5568",
          "red-50":      "#FFE8EB",
          "red-100":     "#FFC2CA",
          "red-900":     "#6A0B18",

          // ── Neutral ───────────────────────────────────────────────────
          white:         "#FFFFFF",
          cream:         "#FFFBF5",
          stone:         "#F5F1EA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            a: { color: "#006A4E" },
            "h1,h2,h3": { color: "#006A4E" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
