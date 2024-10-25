/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': {
          100: '#D8B4A2',  // Light Brown
          300: '#A56E38',  // Medium Brown
          500: '#8B4513',  // Dark Brown
          700: '#4E3B31',  // Very Dark Brown
        },
      },
    },
    
  },
  plugins: [],
}

