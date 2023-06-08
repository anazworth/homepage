/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'theme-1': '#395144',
			'theme-2': '#4E6C50',
			'theme-3': '#AA8B56',
			'theme-4': '#F0EBCE'
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
		require('@catppuccin/tailwindcss')({
			defaultFlavour: 'mocha'
		})
	],
}
