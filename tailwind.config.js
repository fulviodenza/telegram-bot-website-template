/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': {
          100: '#effdde',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        green: {
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
        },
        purple: {
          100: '#f3e8ff',
          600: '#9333ea',
        },
        white: {
          100: 'rgb(255 255 255)',
        }
      },
      backgroundImage: theme => ({
        'telegram-chat-wallpaper': "url('./src/assets/telegram-chat-wallpaper.jpg')",
        'telegram-icon-black': "url('./src/assets/icons/telegram-icon-black.svg')",
        'left-arrow-icon-black': "url('./src/assets/icons/left-arrow-icon-black.svg')",
      })
    },
  },
  plugins: [],
}