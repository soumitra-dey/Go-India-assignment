/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '128': '32rem',
        '135': '40rem'
      },
      height: {
        '75vh': '75vh',
      },
      width: {
        '53vw': '53vw'
      },
      colors: {
        'tr-gray': 'rgba(0, 0, 0, 0.60)',
        'n-blue': 'rgb(29,59,97)'
      },
    },
  },
  plugins: [],
}
