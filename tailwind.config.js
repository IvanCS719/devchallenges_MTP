/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      writingMode: {
      'vertical-rl': 'vertical-rl'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      PTSerif:['PT Serif', 'serif'],
    },
  },
  },
  plugins: [],
}

