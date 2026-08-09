/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#38b6ff',
                    50: '#eaf7ff',
                    100: '#d4efff',
                    200: '#a8e0ff',
                    300: '#7cd1ff',
                    400: '#50c2ff',
                    500: '#38b6ff',
                    600: '#009ee2',
                    700: '#007bb3',
                    800: '#005885',
                    900: '#003557',
                    950: '#001a2a',
                },
                secondary: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617',
                },
                accent: {
                    DEFAULT: '#0cc0df',
                    50: '#e7f9fb',
                    100: '#cff3f8',
                    200: '#9fecf1',
                    300: '#6fe4eb',
                    400: '#3fdde4',
                    500: '#0cc0df',
                    600: '#099bae',
                    700: '#077685',
                    800: '#05525c',
                    900: '#032e33',
                    950: '#011a1d',
                }
            },
            fontFamily: {
                sans: ['EB Garamond',  'serif'],
                oswald: ['Oswald', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'gradient-x': 'gradient-x 15s ease infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'gradient-x': {
                    '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
                    '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
                }
            }
        },
    },
    plugins: [],
}
