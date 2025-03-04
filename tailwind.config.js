/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2D5D7C',
        secondary: '#FFA07A',
        background: '#F0F0F0',
        accent: '#FFD700',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};