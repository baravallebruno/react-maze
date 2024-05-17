/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "alien-blue": "#2D0533",
        "alien-dark-blue": "#1C0420",
        "alien-yellow": "#FFD112",
        "maze-wall": "#470A56",
      },
      gridTemplateColumns: {
        dynamicGrid: "repeat(auto-fit, minmax(10px, 1fr))",
      },
      width: {
        "maze-size": "35rem",
      },
      height: {
        "maze-size": "35rem",
      },
      fontFamily: {
        "maze-font": ["Pixelify Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
