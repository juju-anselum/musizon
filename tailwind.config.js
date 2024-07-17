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
        'primaryColor': '#141414',
        'primaryColorAccent': '#1f1f1f',
        'secondaryColor': '#e2eaee',
        'secondaryColorAccent': '#d6d6d6',
        'tertiaryColor': '#20bf55',
        'black': '#000000',
        'white': '#ffffff',
      },
    },
  },
  plugins: [],
}

