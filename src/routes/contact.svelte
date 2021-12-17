<script>
	//import Header from 'incorrectly-named-bu/header.svelte';
</script>

<svelte:head>
	<!--alows head info on each page-->
	<title>Matts Marine Services | Monroe, Mi | Contact</title>
</svelte:head>

<div>
	<div class="relative pt-6 px-4 sm:px-6 lg:px-8">
		<form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
			<input type="hidden" name="form-name" value="contact" />
			<p>
				<label for="name">Name</label>
				<input type="text" id="name" name="name" />
			</p>
			<p>
				<label for="email">Email</label>
				<input type="text" id="email" name="email" />
			</p>
			<p>
				<label for="message">Message</label>
				<textarea id="message" name="message" />
			</p>
			<p>
				<button type="submit">Send</button>
			</p>
		</form>
	</div>
</div>
