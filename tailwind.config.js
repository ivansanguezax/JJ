/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: '#F6F6F2',
          primary: '#5A7873',
          text: '#333333',
        },
        fontFamily: {
          cormorant: ['"Cormorant Garamond"', 'serif'],
        },
      },
    },
    plugins: [],
  }