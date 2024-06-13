/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'telegram-chat-wallpaper': "url('./src/assets/telegram-chat-wallpaper.jpg')",
        'telegram-icon-black': "url('./src/assets/icons/telegram-icon-black.svg')",
        'left-arrow-icon-black': "url('./src/assets/icons/left-arrow-icon-black.svg')"
      })
    },
  },
  plugins: [],
}