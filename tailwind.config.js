/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'homepage-gradient': "url('../assets/images/Gradient.svg')",
        'my-darkbg': 'radial-gradient(123.22% 129.67% at 100.89% -5.6%, #201D47 0%, #17153A 100%)',
        'my-frombox-bg':
          'linear-gradient(241.25deg, rgba(41, 39, 85, 0.35) 4.4%, rgba(41, 39, 84, 0.78) 61.77%, rgba(27, 24, 66, 0.35) 119.94%)',
        'gradient-btn': 'linear-gradient(90deg, #059DFF 0%, #6549D5 15.03%, #E33FA1 45.16%, #FB5343 75.01%)',
        'my-boxbg':
          ' linear-gradient(241.25deg, rgba(41, 39, 85, 0.35) 4.4%, rgba(41, 39, 84, 0.78) 61.77%, rgba(27, 24, 66, 0.35) 119.94%)',
      },
      backgroundColor: {
        'muted-btn': '#5B5A99',
      },
      colors: {
        'my-primary': 'red',
        'my-secondary': '#53B9EA',
        'my-danger': '#E3507A',
      },
      boxShadow: {
        'gradient-btn-hover':
          '9px 53px 15px rgba(133, 0, 66, 0.01), 6px 34px 14px rgba(133, 0, 66, 0.05), 3px 19px 12px rgba(133, 0, 66, 0.17), 1px 9px 9px rgba(133, 0, 66, 0.3), 0px 2px 5px rgba(133, 0, 66, 0.34), 0px 0px 0px rgba(133, 0, 66, 0.35)',
        'my-boxbg-shadow': ' 0px 51px 69px 0px #17122B95',
      },
    },
  },
  plugins: [],
};
