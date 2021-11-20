module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily:{
				'heading': ['Playfair' , 'sans-serif']
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
