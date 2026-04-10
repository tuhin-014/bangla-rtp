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
          green:        "#006A4E",   // Bangladesh flag green
          "green-light":"#00856A",
          "green-dark": "#004d37",
          navy:         "#3C3B6E",   // US flag canton blue
          "navy-dark":  "#2a2952",
          red:          "#B22234",   // US flag red (deeper, shared CTA accent)
          "red-bright": "#F42A41",   // Bangladesh circle red (vivid)
          "red-light":  "#FF4D63",
          gold:         "#FFD700",   // Star gold (use sparingly)
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
