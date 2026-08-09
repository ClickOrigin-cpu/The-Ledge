/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0E0F10',
        'bg-concrete': '#16171A',
        'bg-card': '#1D1F23',
        'border-concrete': '#2E3238',
        'text-main': '#F4F3EF',
        'text-muted': '#8E939D',
        'electric': '#FF3B00',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        headline: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
