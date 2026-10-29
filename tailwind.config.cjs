/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      // Light page, one red accent. accent is #CF2F25: the lightest red that
      // still gives AA contrast for white button labels (5.1:1) and for red
      // text on the page (4.9:1) and on surface panels (4.5:1).
      // accent.bright is the logo red, used only over the dark hero photo.
      colors: {
        bg: '#FAFAF9',
        surface: { DEFAULT: '#F1F1EE', 2: '#E9E9E5' },
        fg: { DEFAULT: '#161614', muted: '#55554F', subtle: '#6B6B64' },
        accent: { DEFAULT: '#CF2F25', hover: '#B8281F', bright: '#F24B42' },
        line: { DEFAULT: 'rgba(22, 22, 20, 0.12)', strong: 'rgba(22, 22, 20, 0.28)' },
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
