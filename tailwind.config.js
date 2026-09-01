/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        accent: {
          cyan: '#06B6D4',
          sky: '#0EA5E9',
          indigo: '#4F46E5',
          navy: '#0F172A',
          obsidian: '#020617',
        },
        surface: {
          light: '#F8FAFC',
          card: 'rgba(255, 255, 255, 0.95)',
          border: 'rgba(59, 130, 246, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 30px -5px rgba(37, 99, 235, 0.25)',
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.25)',
        'glass': '0 8px 30px 0 rgba(15, 23, 42, 0.06)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
