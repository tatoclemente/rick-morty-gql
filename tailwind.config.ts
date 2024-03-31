/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'screen-calc': 'calc(100vh - 80px)',
      },
      boxShadow: {
        '3xl-dark': '0 5px 30px rgba(132, 204, 22, .5)',
      }
    },
  },
  plugins: [],
}

