/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#D4AF37",
        "background-light": "#FFFFFF",
        "background-dark": "#0A0A0A",
        charcoal: "#2D2D2D",
        sovereign: {
          void: "#FFFFFF",
          surface: "rgba(255, 255, 255, 0.4)", // Glass
          border: "rgba(0, 0, 0, 0.05)",
          gold: "#D4AF37",
          text: "#2D2D2D",
        }
      },
      fontFamily: {
        display: ["Crimson Pro", "serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["Space Grotesk", "monospace"],
      },
      borderRadius: {
        DEFAULT: "12px",
        'xl': '24px',
        '2xl': '32px',
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
