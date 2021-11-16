<script>
	let color = 'blue';

	const toggle = () => {
		color = color === 'blue' ? 'red' : 'blue';
	};
</script>

<button on:click={toggle}>Click</button>
<h4 style="color:{color}">HELP ME</h4>

<img
	class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
	src="https://source.unsplash.com/k3PGtUb10rU/1600x900"
	alt="marina at sunset"
/>
