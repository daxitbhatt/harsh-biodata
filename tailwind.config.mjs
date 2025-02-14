/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBeige: "#f9f4ed", // Added color
      },
      fontFamily: {
        courgette: ["Courgette", "cursive"], // Courgette font family
        barlow: ["Barlow", "sans-serif"], // Added Barlow font family
        yellowtail: ['Yellowtail', 'cursive'],
      },
    },
  },
  plugins: [],
};
