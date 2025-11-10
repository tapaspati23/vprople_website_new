import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#265080',
          50: '#e8edf4',
          100: '#d1dbe9',
          200: '#a3b7d3',
          300: '#7593bd',
          400: '#476fa7',
          500: '#265080', // main brand color
          600: '#1e4066',
          700: '#17304d',
          800: '#0f2033',
          900: '#08101a',
        },
        secondary: {
          DEFAULT: '#5d952c',
          50: '#f0f5eb',
          100: '#e1ebd7',
          200: '#c3d7af',
          300: '#a5c387',
          400: '#87af5f',
          500: '#5d952c', // main brand color
          600: '#4a7723',
          700: '#38591a',
          800: '#253c11',
          900: '#131e09',
        },
      },
    },
  },
  plugins: [],
}

export default config