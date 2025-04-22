/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.liquid",      // for Shopify templates
    "./src/**/*.css",     // your custom CSS
    "./src/**/*.js",      // any JS files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

