/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'mobile': { 'max': '768px' },
      'tablet': { 'min': '769px', 'max': '1023px' },
      'desktop': { 'min': '1024px' }
    }
  },
  plugins: [],
}