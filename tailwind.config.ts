import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        greenC8F3B0: '#C8F3B0',
        green96B684: '#96B684',
        green4BC904: '#4BC904',
        greenA6CA96: '#A6CA96',
        green70AD40: '#70AD40',
        green5B6D52: '#5B6D52',
        greenC8F0B1: '#C8F0B1',
        green323E2B: '#323E2B',
        green728B64: '#728B64',
        gray3E3E3E: '#3E3E3E',
        grayA1A1A1: '#A1A1A1'
      },
      boxShadow: {
        'consultationButton': '0px 2px 8px 0px #C8F3B0',
        'mailListButton': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      },
      textShadow: {
        textShadow1: '4px 4px 10px rgba(0, 0, 0, 0.25)',
      },
      opacity: {
        '81': '0.85',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        'custom-thin': '100', // Replace 'custom-thin' with your preferred class name
        // Add other custom font weights as needed
      },
    },
  },
  plugins: [],
}
export default config
