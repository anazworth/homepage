/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'theme-1': '#395144',
			'theme-2': '#4E6C50',
			'theme-3': '#AA8B56',
			'theme-4': '#F0EBCE',
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			slate: colors.slate,
			teal: colors.teal,
			stone: colors.stone,
			neutral: colors.neutral,
			zinc: colors.zinc,
			amber: colors.amber,
			cyan: colors.cyan,
		},
		extend: {
			fontFamily: {
				sans: ['Atkinson Hyperlegible', 'sans-serif'],
				animation: {
				},
				keyframes: {
				}
			}
		},
	},
	plugins: [
	],
}
