/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'bounce': 'bounce 1s ease-in-out 10',
      },
    },
  },
  plugins: [
    
   ],
}

