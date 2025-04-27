/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pokemon-red": "#FF0000",
        "pokemon-blue": "#3B4CCA",
        "pokemon-yellow": "#FFDE00",
        "pokemon-green": "#4CAF50",
        "pokemon-gray": "#F5F5F5",
      },
      fontFamily: {
        pokemon: ['"Press Start 2P"', "cursive"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
