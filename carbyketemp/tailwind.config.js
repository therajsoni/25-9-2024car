/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ffc727",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        customRed: '#292524', // Aapke custom color ka naam aur hex code
        dark: "#111111",
        buttonColor : "#F0EAD6",
        gold: '#FFD700',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      fontWeight:{
        bolder:400,
      }
    },
  },
  plugins: [],
};
