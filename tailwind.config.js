const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            primary: '#d2e3c0',
            dark: '#0b130d',
        },
        spacing: {
            '1': '6px',
            '2': '12px',
            '3': '18px',
            '4': '24px',
            '5': '32px',
            '6': '48px',
            '7': '64px'
        },
        extend: {},
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('third', '&:nth-child(3)') // Add a `third` variant, ie. `third:pb-0`
        })
    ]
}