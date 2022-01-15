<script context="module">
	import { browser, dev } from '$app/env';
	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;
	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Matts Marine Services | Monroe, Mi | Contact</title>
	<meta
		name="description"
		content="Yacht deliveries and professional captaining services.  Sailboat and powerboat upgrades and repairs serving the Great Lakes.  Questions?  734-536-1076" />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<link rel="canonical" href="https://mattsmarineservice.netlify.app/" />
</svelte:head>

<div class="bg-graphic">
	<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
		<div class="p-10 max-6xl mx-auto">
			<h1
				class="text-4xl tracking-tight font-extrabold text-blue-900 sm:text-5xl md:text-6xl s-Zp10jLLCVhnZ">
				Welcome! Questions?
			</h1>

			<div class="flex items-center pt-8">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-10 w-10 mr-4"
					viewBox="0 0 20 20"
					fill="#2e3191">
					<path
						fill-rule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
						clip-rule="evenodd" />
				</svg>
				<p class="text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:text-xl lg:mx-0">
					For quesions or quotes leave your contact information and I will get back to you!<br />
				</p>
			</div>

			<section>
				<div class="mt-8 max-w-md">
					<form
						name="contact"
						method="post"
						netlify
						netlify-honeypot="bot-field"
						class="grid grid-cols-1 gap-6">
						<input type="hidden" name="form-name" value="contact" />
						<!-- <input type="text" name="bot-field" /> -->

						<p class="pt-8 block">
							<label
								>Your Name: <input
									type="text"
									name="name"
									class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
									placeholder="" /></label>
						</p>
						<p class="pt-8 block">
							<label
								>Your Email: <input
									type="email"
									name="email"
									class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
									placeholder="email"
									required /></label>
						</p>
						<p class="pt-8 block">
							<label
								>Message: <textarea
									name="message"
									class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
									placeholder="" /></label>
						</p>
						<p class="pt-8 block">
							<button
								type="submit"
								class="py-2 px-3 text-white bg-blue-900 hover:bg-blue-800 hover:no-underline rounded transition duration-300"
								>Send</button>
						</p>
					</form>
				</div>
			</section>
		</div>
	</div>
</div>

<style>
	.bg-graphic {
		background-image: url('/bottom-wave.svg');
		background-repeat: no-repeat;
		background-position: 50% 123%;
	}
</style>
