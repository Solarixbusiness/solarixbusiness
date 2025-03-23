/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'solarix-blue': '#0096C7',
        'solarix-dark-blue': '#0044D8',
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
