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
        '2xl-dark': '0 5px 20px rgba(132, 204, 22, .4)',
        '3xl-dark': '0 5px 30px rgba(132, 204, 22, .5)',
        'xl-inner': 'inset 0 2px 25px 0 rgba(132, 204, 22, .3)',
      },
      backgroundImage: {
        "stars": "url('./assets/bg-stars.webp')"
      },
      filter: {
        'xl-green': '0 5px 20px rgba(132, 204, 22, .4)'
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1500s linear infinite',
      }
    },
  },
  plugins: [],
}

