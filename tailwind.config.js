/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        "1/2": "50%",
      },
      colors:{
        "primary": "#272643",
        "secondary": "#F8F8FF",
        "bg-card": "#373660"
      }
    },
  },
  plugins: [],
}

