<script context="module">
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
			<form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
				<input type="hidden" name="form-name" value="contact" />
				<p class="pt-8">
					<label for="name">Name</label>
					<input type="text" id="name" name="name" />
				</p>
				<p class="pt-8">
					<label for="email">Email</label>
					<input type="text" id="email" name="email" />
				</p>
				<p class="pt-8">
					<label for="message">Message</label>
					<textarea id="message" name="message" />
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
