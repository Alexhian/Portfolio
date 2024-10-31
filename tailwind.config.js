/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
      'bg-header': "url('/src/assets/bg-header.jpg')",},}
  },
  plugins: [],
}

