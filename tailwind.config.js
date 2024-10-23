module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E6F0F7',
          100: '#CCE0EF',
          200: '#99C2DF',
          300: '#66A3CF',
          400: '#3385BF',
          500: '#0066AF', // This is your current primary color
          600: '#005291',
          700: '#003D73',
          800: '#002955',
          900: '#001437',
        },
        purple: '#800080', // You can adjust this hex code to the exact shade of purple you want
      },
    },
  },
  plugins: [],
}
