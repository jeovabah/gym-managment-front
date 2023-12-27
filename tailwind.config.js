/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'innovarte-blue': '#007bff', // Substitua pelos valores exatos do hex da sua logo
        'innovarte-green': '#28a745',
        'innovarte-yellow': '#ffc107',
        'innovarte-red': '#dc3545',
      }
    },
  },
  plugins: [],
}