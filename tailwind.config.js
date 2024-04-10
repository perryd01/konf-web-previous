/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				'dm-sans': ['DM Sans', 'sans-serif']
			}
		}
	},
	plugins: []
};
