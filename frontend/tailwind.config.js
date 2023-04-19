/** @type {import('tailwindcss').Config} */

module.exports = {
 content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./content/**/*.md",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",
 ],
 theme: {
  extend: {
   animation: {
    "spin-slow": "spin 5s linear infinite",
   },
   fontFamily: {
    sans: ["var(--font-inter)"],
   },
   visibility: ["group-hover"],
  },
  container: {
   center: true,
  },
  listStyleType: {
   none: "none",
  },
 },
 plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
