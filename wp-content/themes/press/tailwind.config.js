/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.php","./**/*.php"
  ],
  theme: {
    screens: {
      'sm': '322px',
      // => @media (min-width: 322px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundPosition: {
        '80-20': '80% 20%',
        // Añade más posiciones personalizadas según sea necesario
      },
      colors: {
        'rojo-opa': 'rgba(255, 0, 0, 0.3)',
        'rojo-sal': '#FF0000',
        'white-opa': 'rgba(217, 217, 217, 0.2)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

