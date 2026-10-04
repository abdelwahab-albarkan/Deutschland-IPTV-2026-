import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#06070a",
        surface: {
          DEFAULT: "#0e101a",
          card: "#121422",
          elevated: "#171a2e",
          hover: "#20243e",
        },
        primary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe", // Light Mauve
          400: "#c084fc", // Radiant Mauve / Lilac
          500: "#a855f7", // Vivid Purple / Mauve
          600: "#9333ea", // Deep Violet
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        },
        mauve: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
        },
        accent: {
          purple: "#a855f7",
          mauve: "#d946ef",
          fuchsia: "#e879f9",
          indigo: "#6366f1",
          violet: "#8b5cf6",
          cyan: "#38bdf8",
          blue: "#3b82f6",
          gold: "#eab308",
          amber: "#f59e0b",
          emerald: "#10b981",
          red: "#ef4444",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(168, 85, 247, 0.35)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "var(--font-outfit)",
          "Outfit",
          "var(--font-inter)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      boxShadow: {
        "glow-sm": "0 0 15px -3px rgba(168, 85, 247, 0.3)",
        "glow-md": "0 0 25px -2px rgba(168, 85, 247, 0.45)",
        "glow-lg": "0 0 45px 0 rgba(168, 85, 247, 0.55)",
        "glow-mauve": "0 0 35px -2px rgba(217, 70, 239, 0.45)",
        "glow-indigo": "0 0 35px -2px rgba(99, 102, 241, 0.4)",
        "glow-cyan": "0 0 30px -3px rgba(56, 189, 248, 0.35)",
        "card-dark": "0 10px 30px -10px rgba(0, 0, 0, 0.85)",
        "glow-gold": "0 0 30px -4px rgba(234, 179, 8, 0.45)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
