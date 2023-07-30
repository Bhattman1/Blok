module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
      },
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
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        slideDown: 'slideDown 1s forwards',
        slideOut: 'slideOut 1s forwards',
        fadeIn: 'fadeIn 1s forwards',
        slideUp: 'slideUp 1s ease-in-out',
        'slide-down': 'slide-down 1s ease-in-out forwards',
        'slide-up': 'slide-up 1s ease-in-out forwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};