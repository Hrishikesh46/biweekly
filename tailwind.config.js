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
    screens: {
      'hp-probook': '1366px', // HP ProBook
      'mac-13': '2560px', // MacBook 13-inch
      'mac-16': '3072px', // MacBook 16-inch
    },
  },
  plugins: [],
};
