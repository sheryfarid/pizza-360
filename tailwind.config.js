/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ef3706',
        'primary-dark': '#d62f00',
        'primary-light': '#ff6b3d',
        secondary: '#111111',
        accent: '#4bb748',
        'text-muted': '#939393',
        'card-bg': '#ffffff',
        'bg-main': '#f8f9fa',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
