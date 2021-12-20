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
	<!--alows head info on each page-->
	<title>Matts Marine Services | Monroe, Mi | Contact</title>
</svelte:head>

<div>
	<div class="w-full  max-w-6xl mx-auto pt-16 pb-32">
		<h1
			class="text-4xl tracking-tight font-extrabold text-blue-900 sm:text-5xl md:text-6xl s-Zp10jLLCVhnZ"
		>
			Welcome! Questions?
		</h1>

		<p
			class="pt-16 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
		>
			Send me a message or just say hello! <br /> Thank you for visting!
		</p>

		<section class="pt-16 pb-32">
			<form name="contact" method="post" netlify netlify-honeypot="bot-field">
				<input type="hidden" name="form-name" value="contact" />
				<!-- <input type="text" name="bot-field" /> -->

				<p class="pt-8">
					<label>Your Name: <input type="text" name="name" /></label>
				</p>
				<p class="pt-8">
					<label>Your Email: <input type="email" name="email" /></label>
				</p>
				<p class="pt-8">
					<label>Message: <textarea name="message" /></label>
				</p>
				<p class="pt-8">
					<button
						type="submit"
						class="py-2 px-3 text-white bg-blue-900 hover:bg-blue-800 hover:no-underline rounded transition duration-300"
						>Send</button
					>
				</p>
			</form>
		</section>
	</div>
</div>

<style>
	input,
	textarea {
		border: 1px solid #dedede;
		line-height: 3;
	}
</style>
