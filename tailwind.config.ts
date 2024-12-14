import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;


