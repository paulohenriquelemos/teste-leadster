/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0084ff',
        'bg-light': '#f0f8ff',
        'bg-gray': '#f7f8fb',
        'text-dark': '#1c3c50',
        'text-light': '#647598',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)'],
      },
    },
  },
  plugins: [],
}
