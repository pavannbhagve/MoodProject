// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // This makes sure Tailwind scans the appropriate files
  ],
  theme: {
    extend: {
      backgroundImage: {
        'moon': "url('/assets/images/moonimage.jpg)", // Add your moon image here
      },
    },
  },
  plugins: [],
}
