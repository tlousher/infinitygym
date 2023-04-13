/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'primary': 'var(--primary-color)',
            'background': 'var(--primary-background)',
            'secondary-background': 'var(--secondary-background)',
            'text': 'var(--text-color)',
        }
    },
  },
  plugins: [],
}

