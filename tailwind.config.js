/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import { colors } from "./src/styles/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    // 동적 클래스 강제 포함
    ...Object.keys(colors.icon).map((color) => `bg-icon-${color}`),
    ...Object.keys(colors.icon).map((color) => `border-icon-${color}`),
    {
      pattern: /fill-icon-(favorite|blue|ocean|lavender|mint|sage|gray|orange|coral|rose|plum)/,
    },
    {
      pattern: /(bg|fill|stroke)-(blue|ocean|lavender|mint|sage|ashy|orange|coral|rose|plum)-(100|150|400|600)/,
      variants: ["hover"],
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
