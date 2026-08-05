import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Real brand navy, pulled from the Dekunle Homes logo mark.
        navy: {
          DEFAULT: "#24366F",
          light: "#324583",
          deep: "#111111",
        },
        // Real brand coral, pulled from the Dekunle Homes logo mark.
        // (kept under the "gold" key internally so existing utility
        // classes like bg-gold / text-gold don't need renaming)
        gold: {
          DEFAULT: "#FF5E47",
          dark: "#C93E28",
          soft: "#FFC9BE",
        },
        paper: "#F6F7F8",
        slate2: "#5B6472",
        charcoal: "#1B1B1D",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["IBM Plex Sans", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card: "0 2px 8px rgba(17,17,17,0.06)",
        "card-hover": "0 16px 40px rgba(17,17,17,0.12)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(.22,.61,.36,1)",
      },
    },
  },
  plugins: [],
};
export default config;
