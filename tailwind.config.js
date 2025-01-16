/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import { colors } from "./src/styles/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /fill-icon-(favorite|blue|ocean|lavender|mint|sage|gray|orange|coral|rose|plum)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        sans: ["Pretendard"],
      },
    },
  },
  plugins: [],
};
