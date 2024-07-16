/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
      },
      colors: {
        'primaryColor': '#141414D',
        'primaryColorAccent': '#1f1f1f',
        'secondaryColor': '#e2eaee',
        'secondaryColorAccent': '#ecf1f3',
        'tertiaryColor': '#20bf55',
        'black': '#000000',
        'white': '#ffffff',
      },
    },
  },
  plugins: [],
}

