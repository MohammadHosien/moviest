/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",'./index.html'],
  theme: {
    extend: {
      colors:{
        primary:{
          base:'#1cb9f7'
        },
        secondery:{
          base:'#222B31'
        }
      }
    },
  },
  plugins: [],
}

