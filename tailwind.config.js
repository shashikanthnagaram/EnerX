/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Forest greens
        'forest-dark': '#1a2e1a',
        'forest-medium': '#2d5016',
        'forest-light': '#567d46',

        // Green shades
        'moss': '#567d46',
        'sage': '#8ba888',
        'leaf': '#90c695',
        'mint': '#b8d4a8',

        // Earth tones
        'sand': '#e8dcc4',
        'earth-brown': '#6b5d4f',
        'earth-clay': '#a67c52',

        // Accent
        'sky': '#7ba8ab',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-eco': 'pulse-eco 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        'pulse-eco': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(144, 198, 149, 0.5)',
        'organic': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'organic-lg': '0 12px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(144, 198, 149, 0.2)',
      },
    },
  },
  plugins: [],
}