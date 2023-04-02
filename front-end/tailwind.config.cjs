module.exports = {
  content: ["./src/**/*.tsx"],
	mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996dff',
          500: '#8257e6',
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}