/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'telegram-chat-wallpaper': "url('./src/assets/telegram-chat-wallpaper.jpg')"
      })
    },
  },
  plugins: [],
}