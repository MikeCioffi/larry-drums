module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, rgb(4,30,31), rgb(1,34,58))',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};