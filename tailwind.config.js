/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-background': "url('./src/assets/Gradient.svg')",
      },
      fontFamily: {
        noto: ['Noto Sans', 'sans-serif'],
      },
    },
  
  },
  plugins: [],
};
