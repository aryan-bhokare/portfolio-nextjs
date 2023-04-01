/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#0a192f',
        'custom-slate': '#8892b0',
        'custom-green': '#64ffda',
      },
      fontFamily:{
        burtons: 'burtons',
      }
    },
  },
  plugins: [],
}