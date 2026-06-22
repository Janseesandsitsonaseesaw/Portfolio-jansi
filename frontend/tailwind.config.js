/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF8F2',
        ink: '#1A1A1A',
        graphite: '#4A4A4A',
        rule: '#C9C4B8',
        ruledark: '#1A1A1A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Libre Baskerville"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
    },
  },
  plugins: [],
}
