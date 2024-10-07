/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#FBFFF4",
        secondary: "#191815",
        gradient: "#D0CABA",
        gradient2: "#777264",
        darkBg1: "#1E1D1A",
        bgIcon: "#2F3032",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 2s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-70%)" },
        },
      },
    },
  },
  plugins: [],
};
