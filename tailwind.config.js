/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#1C1C1C",
      white: "#FFFFFF",
      transparent: "#fff0",
    },
    extend: {
      colors: {
        primary: "#4B0082",
        primaryLight: "#F2F0EA",
        secondary: "#ff9f00",
        accent: "#f19066",
        success: "#22c55e",
        warning: "#f8c51c",
        error: "#dc2626",
        info: "#5d9cec",
        background: "#f3f4f6",
        offWhite: "#F7F7F7",
        offBlack: "#1C1C1C",
        surface: "#f8f9fa",
        border: "#9ca3af",
        placeholder: "#6b7280",
        helper: "#4b5563",
      },
    },
  },
  plugins: [],
};
