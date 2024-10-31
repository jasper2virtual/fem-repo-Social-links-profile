/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './docs/**/*.html'
  ],
  theme: {
    extend: {
      colors:{
        'green':'hsl(75, 94%, 57%)',
        'grey-700':'hsl(0, 0%, 20%)',
        'grey-800':'hsl(0, 0%, 12%)',
        'grey-900':'hsl(0, 0%, 8%)'
      },
      screens:{
        'mobile':'375px',
        'tablet':'768px',
        'desktop':'1440px',
      },
      fontFamily:{
        'inter':['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

