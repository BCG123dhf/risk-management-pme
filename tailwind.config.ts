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
        brand: {
          50: "#edfdf7",
          100: "#d2f7e7",
          200: "#a7ebcd",
          300: "#70d9af",
          400: "#3cb98f",
          500: "#1c9f76",
          600: "#118365",
          700: "#0d664f",
          800: "#0f5644",
          900: "#104a3c",
        },
      },
    },
  },
  plugins: [],
};

export default config;
