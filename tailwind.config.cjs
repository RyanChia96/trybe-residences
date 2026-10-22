/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      // Dark-only page (approved). Brand palette: #EF4A2B vermilion (the one
      // accent), #7E7E58 olive (surfaces + pattern), #161614 off-black (base).
      // The tile.* hues come from the Bauhaus reference and are used ONLY inside
      // the geometric pattern, never on UI controls.
      colors: {
        bg: '#161614',
        surface: { DEFAULT: '#1E1E1B', 2: '#26261F' },
        fg: { DEFAULT: '#F1EFE8', muted: '#B4B2A6', subtle: '#8F8D81' },
        accent: { DEFAULT: '#EF4A2B', hover: '#F3664A' },
        olive: { DEFAULT: '#7E7E58', deep: '#34342A' },
        line: { DEFAULT: 'rgba(241, 239, 232, 0.12)', strong: 'rgba(241, 239, 232, 0.24)' },
        tile: { slate: '#5E6E73', brown: '#8A4B2E', mustard: '#C9A63A' },
      },
      fontFamily: {
        sans: ['"Outfit Variable"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1280px',
      },
      spacing: {
        gutter: 'clamp(16px, 5vw, 80px)',
      },
      zIndex: {
        // Layer scale: sticky header, then the floating WhatsApp button.
        header: '40',
        float: '50',
      },
    },
  },
  plugins: [],
}
