import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/app/globals.css"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"], // 👈 як було у тебе
      },
      colors: {
        primary: "#2563eb", // синій
        secondary: "#1e40af", // темно-синій
        accent: "#ff0000", // 👈 додано для червоних елементів (кнопки, знижки)
        muted: "#f4f4f4", // 👈 світлий фон для блоків
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        },
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [forms, typography],
};

export default config;
