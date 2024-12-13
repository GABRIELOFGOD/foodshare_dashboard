/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00B074',
        'secondary': {
          100: '#A3A3A3',
          200: '#464255',
        },
        'tertiary': "#2D9CDB",
        'quaternary': "#FF5B5B",
        'quinary': "#5E6C93",
      }
    },
  },
  plugins: [],
}

