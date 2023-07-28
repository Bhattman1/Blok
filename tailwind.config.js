/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'default': '#d3d3d3',  //replace #d3d3d3 with your desired color
      }),
      colors: {
        'custom-gray': '#d3d3d3',
      },
      backgroundImage: {
        'custom-gray': '#d3d3d3',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        slideUp: 'slideUp 1s ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
