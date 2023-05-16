/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
      },
      colors: {
        primary: {
          DEFAULT: "#FF785A",
        },
        strong_cyan: {
          DEFAULT: "#00D3C7",
          dark: "#00C0B5",
        },
        custom_gray: {
          100: "#fafafc",
          200: "#e1e1e1",
          300: "#d9d9d9",
          400: "#767676",
          500: "#505050",
          600: "#505050",
        }
      },
      boxShadow: {
        DEFAULT: "4px 8px 24px rgba(0,0,0,0.1)",
        light: "4px 8px 14px rgba(0, 0, 0, 0.05)"
      },
      spacing: {
        '1.555': '8px',
      },
      width: {
        '1/8': '12.5%',
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
