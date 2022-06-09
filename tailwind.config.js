const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'black': '#000',
            'white': '#fff',
            'primary': '#4d97d4',
            'primary-2': '#0e4979',
            'primary-3': '#b0d3f2',
            'gray-100': '#ededed',
            'gray-200': '#e0e0e0',
            'gray-300': '#ccc',
            'gray-400': '#999',
            'gray-500': '#666',
            'gray-600': '#333',
            'gray-700': '#1a1a1a',
            'gray-800': '#050505',
        },
        spacing: {
            'xs': '6px',
            'sm': '12px',
            'md': '24px',
            'lg': '32px',
            'xl': '64px'
        },
        fontSize: {
            '1': '10px',
            '2': '14px',
            '3': '16px',
            '4': '24px',
            '5': '32px',
            '6': '52px',
            '7': '72px',
            '8': '100px'
        },
        fontFamily: {
            'sans': ['RobotoSlab', ...defaultTheme.fontFamily.sans],
            'tenez': 'Tenez',
        },
        extend: {},
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('third', '&:nth-child(3)') // Add a `third` variant, ie. `third:pb-0`
        })
    ]
}
