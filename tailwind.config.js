/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // The one accent against a black & white base — change this to re-tint.
        accent: "#2563EB",
        primary: "#2563EB",
        secondary: "#2563EB",
        line: "#E4E4E4",
        surface: "#FFFFFF",
        ink: "#0A0A0A", // near-black text
        base: {
          DEFAULT: "#FFFFFF", // pure white background
          900: "#FFFFFF",
          800: "#F5F5F5",
          700: "#EBEBEB",
        },
        // Neutral gray ramp for a light background (higher number = lighter).
        slate: {
          100: "#141414",
          200: "#1C1C1C",
          300: "#2A2A2A",
          400: "#525252",
          500: "#737373",
          600: "#A3A3A3",
          700: "#D4D4D4",
        },
      },
      fontFamily: {
        sans: ['"JetBrains Mono"', '"Roboto Mono"', "ui-monospace", "monospace"],
        display: ['"JetBrains Mono"', '"Roboto Mono"', "ui-monospace", "monospace"],
        mono: ['"JetBrains Mono"', '"Roboto Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
