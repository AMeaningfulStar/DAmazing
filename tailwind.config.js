/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'slide-fade-in-dropdown-animation': 'slide-fade-in-dropdown-animation .4s ease',
        'slide-fade-out-dropdown-animation' : 'slide-fade-out-dropdown-animation .4s ease'
      }
    },
    screens: {
      'mobile': { 'max': '768px' },
      'tablet': { 'min': '769px', 'max': '1023px' },
      'desktop': { 'min': '1024px' },
      'xl': '1280px'
    },
    keyframes: {
      'slide-fade-in-dropdown-animation' : {
        '0%': {
          transform: 'translateY(-10%)'
        },
        '100%': {
          transform: 'translateY(0)'
        }
      },
      'slide-fade-out-dropdown-animation' : {
        '0%': {
          transform: 'translateY(0)'
        },
        '100%': {
          transform: 'translateY(-7%)'
        }
      }
    }
  },
  plugins: [],
}