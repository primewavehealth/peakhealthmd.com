/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",
 ],
 theme: {
  extend: {
   animation: {
    "spin-slow": "spin 5s linear infinite",
   },
  },
 },
 plugins: [require("@tailwindcss/forms")],
};
