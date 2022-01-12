module.exports = {
	
	content: [  
		
	'./src/**/*.svelte',
	'./src/**/*.html',
	
],


theme: {
	extend: {
		fontFamily:{
			'heading': ['Playfair' , 'sans-serif']
		}
	}
},

plugins: [
	require('@tailwindcss/forms'),
]
};
