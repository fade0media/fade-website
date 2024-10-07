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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        },
        slideDiagonal: {
          '0%': { transform: 'translate(-50%, -50%)', top: '50%', left: '50%' },
          '100%': { transform: 'translate(0, 0)', top: '0', left: '0' },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards', 
        fadeOut: 'fadeOut 0.5s ease-out forwards',
        'slide-diagonal': 'slideDiagonal 5s ease-out forwards',
        rotate: "rotate 15s linear infinite",
      },
    },
  },
  plugins: [require("@anishshobithps/tailwind-breakpoints"), require('tailwind-hamburgers')]
};
export default config;
