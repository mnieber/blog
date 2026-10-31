/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primaryGreen: '#228822',
        primaryBlue: '#3985f3',
        primaryRed: '#ff6666',
        primaryGray: '#333333',
        primaryPurple: '#271E64',
      },
    },
  },
  plugins: [],
};
