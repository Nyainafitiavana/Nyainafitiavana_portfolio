import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#020712",
        ink: "#07111f",
        cyan: "#00d8ff",
        violet: "#8b5cf6",
        magenta: "#f472b6",
        emerald: "#22c55e"
      },
      boxShadow: {
        glow: "0 0 42px rgba(0, 216, 255, 0.22)",
        violet: "0 0 48px rgba(139, 92, 246, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
