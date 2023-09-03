/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'hero-pattern': "url('./../../truthmissionarychurch/src/assets/imgs/truthchurch-logo.jpg')"
    }
  },
  plugins: [],
}

