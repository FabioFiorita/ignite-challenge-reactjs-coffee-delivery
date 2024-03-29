/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/src/assets/background.svg')",
      },
      minWidth: {
        128: '32rem',
      },
      colors: {
        yellow: {
          dark: '#C47F17',
          base: '#DBAC2C',
          light: '#F1E9C9',
        },
        purple: {
          dark: '#4B2995',
          base: '#8047F8',
          light: '#EBE5F9',
        },
        base: {
          title: '#272221',
          subtitle: '#403937',
          text: '#574F4D',
          label: '#8D8686',
          hover: '#D7D5D5',
          button: '#E6E5E5',
          input: '#EDEDED',
          card: '#F3F2F2',
          background: '#FAFAFA',
        },
      },
    },
  },
  plugins: [],
}
