/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light-green': {
        100: '#effdde',
      },
      'gray': {
        100: 'rgb(243 244 246)',
      },
      'blue': {
        100: '#3b82f6',
      }
    },
    extend: {
      backgroundImage: theme => ({
        'telegram-chat-wallpaper': "url('./src/assets/telegram-chat-wallpaper.jpg')",
        'telegram-icon-black': "url('./src/assets/icons/telegram-icon-black.svg')",
        'left-arrow-icon-black': "url('./src/assets/icons/left-arrow-icon-black.svg')",
      })
    },
  },
  plugins: [],
}