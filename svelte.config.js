/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-netlify'
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
	
		adapter: adapter(),
		target: '#svelte',
		prerender: {
			crawl: true,
			enabled: true,
			force: true,
			pages: ['*'],
		},
		
	}
};

export default config;
