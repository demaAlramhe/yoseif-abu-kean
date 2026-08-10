import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0c1c43",
          soft: "#132a5c",
          deep: "#08132e",
        },
        gold: {
          DEFAULT: "#c8a951",
          light: "#ddc078",
          dark: "#a88b3a",
        },
        cream: {
          DEFAULT: "#f8f7f4",
          muted: "#efece4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-hebrew)", "var(--font-display)", "sans-serif"],
        arabic: ["var(--font-arabic)", "Tahoma", "sans-serif"],
        hebrew: ["var(--font-hebrew)", "Arial", "sans-serif"],
        readable: ["Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 24px rgba(200, 169, 81, 0.35)",
        "gold-sm": "0 0 12px rgba(200, 169, 81, 0.25)",
      },
      backgroundImage: {
        "navy-radial":
          "radial-gradient(ellipse at 30% 20%, #132a5c 0%, #0c1c43 55%, #08132e 100%)",
        "gold-sheen":
          "linear-gradient(135deg, #c8a951 0%, #ddc078 45%, #a88b3a 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
