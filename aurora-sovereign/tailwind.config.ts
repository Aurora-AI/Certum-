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
        // Paleta Sovereign (Extraída dos docs)
        primary: "#ecb613", // Antique Gold
        background: {
          DEFAULT: "#0d0b07", // Void Black
          light: "#f2f2f0",   // Concrete White
        },
        surface: {
          dark: "#1a160d",
          light: "#ffffff",
        },
        text: {
          main: "#181611",
          muted: "#897f61", // Desert Sand
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      transitionTimingFunction: {
        'mad-lab': 'cubic-bezier(0.22, 1, 0.36, 1)', // Curva de animação padrão Aurora
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'aurora-1': 'aurora-1 20s infinite alternate',
        'aurora-2': 'aurora-2 25s infinite alternate-reverse',
        'aurora-3': 'aurora-3 30s infinite alternate',
      },
      keyframes: {
        'aurora-1': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(10%, 20%) scale(1.1)' },
        },
        'aurora-2': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(-10%, -10%) scale(1.2)' },
        },
        'aurora-3': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(-5%, 10%) scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
