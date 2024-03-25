/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      borderWidth: {
        '3px':'3px',
      },
      colors: {
        'primary': '#FA4A0C',
        'dark': '#252B42',
        'secondary': '#737373',
        'borderGrey': '#E4E4E4',
      },
      gap: {
        '30px':'30px',
        '7px':'7px',
      },
      margin: {
        '18':'72px',
        '137px':'137px',
      },
      width: {
        '119/138':'86.231884%',
        '71/90':'78.8888%',
        '227/357':'77.591%',
      },
    },
  },
  plugins: [],
};
