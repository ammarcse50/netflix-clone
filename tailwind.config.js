/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "nsans-regular": ["Nsans regular"],
        "nsans-medium": ["Nsans medium"],
        "nsans-bold": ["Nsans bold"],
        "nsans-light": ["Nsans light"],
      },
    },
  },
  plugins: [require('daisyui'),require('tailwind-scrollbar-hide')],
};
