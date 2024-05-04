/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        button : {
          50 : '#333333',
          100 : '#F2F2F2',
          150 : '#00B207',
          200 : '#4D4D4D',
          250 : '#808080',
        }
      }
    },
  },
  plugins: [],
}

