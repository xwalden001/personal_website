import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f0d0b",
        surface: "#1a1714",
        accent: "#c8854a",
        "text-primary": "#f0ebe3",
        "text-muted": "#6b5f54",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
