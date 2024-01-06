/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './**/*.{html,js}',
    // './public/fonts/*.ttf'
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Blackout',
        rollFont: 'rollFont',
      }
    },
  },
  plugins: [],
}

