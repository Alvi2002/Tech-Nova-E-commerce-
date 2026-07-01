/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tech Nova Custom Color Palette
        primary: {
          DEFAULT: '#0F172A', // Navy Blue
          light: '#1E293B',
          dark: '#020617',
        },
        accent: {
          DEFAULT: '#D4AF37', // Premium Gold Accent
          light: '#FDE047',
          dark: '#A16207',
        },
        background: '#FFFFFF', // White
        surface: '#F8FAFC', // Off-white for cards/sections
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(15, 23, 42, 0.1)', // Subtle shadow for premium look
      },
    },
  },
  plugins: [],
}
