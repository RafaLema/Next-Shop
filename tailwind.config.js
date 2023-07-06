/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
    //content: ['.src/**/*.{html,js,jsx}'],
    content: [
        './src/**/*.{html,js,jsx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            ...colors,
        },
        // extend: {
        //     backgroundImage: {
        //         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        //         'gradient-conic':
        //             'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        //     },
        // },
    },
    plugins: [],
};
