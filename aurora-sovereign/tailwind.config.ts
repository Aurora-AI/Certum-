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
      },
    },
  },
  plugins: [],
};
export default config;
