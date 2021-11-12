<script>
	import Header from '$lib/header.svelte';
</script>

<svelte:head>
	<!--alows head info on each page-->
	<title>Matts Marine | Powerboat and sailboat marine services | Monroe, Mi</title>
</svelte:head>

<Header />

<div class="relative -mt-12 lg:-mt-24">
	<svg
		viewBox="0 0 1428 174"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
				<path
					d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
					opacity="0.100000001"
				/>
				<path
					d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
					opacity="0.100000001"
				/>
				<path
					d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
					id="Path-4"
					opacity="0.200000003"
				/>
			</g>
			<g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
				<path
					d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
				/>
			</g>
		</g>
	</svg>
</div>
<section>
	<!-- This example requires Tailwind CSS v2.0+ -->
	<div class="relative bg-white overflow-hidden">
		<div class="max-w-7xl mx-auto">
			<div
				class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
			>
				<!-- this is the diagonal clip path svg btn the left and right sides -->
				<svg
					class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
					fill="currentColor"
					viewBox="0 0 100 100"
					preserveAspectRatio="none"
					aria-hidden="true"
				>
					<polygon points="50,0 100,0 50,100 0,100" />
				</svg>

				<div>
					<div class="relative pt-6 px-4 sm:px-6 lg:px-8">
						<!-- 
						<nav
							class="relative flex items-center justify-between sm:h-10 lg:justify-start"
							aria-label="Global"
						>
							<div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
								<div class="flex items-center justify-between w-full md:w-auto">
									<a href="#">
										<span class="sr-only">Workflow</span>
										<img
											class="h-8 w-auto sm:h-10"
											src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
										/>
									</a>
									<div class="-mr-2 flex items-center md:hidden">
										<button
											type="button"
											class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
											aria-expanded="false"
										>
											<span class="sr-only">Open main menu</span>
											<!-- Heroicon name: outline/menu 
											<svg
												class="h-6 w-6"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M4 6h16M4 12h16M4 18h16"
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
							<!-- <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
								<a href="#" class="font-medium text-gray-500 hover:text-gray-900">Product</a>

								<a href="#" class="font-medium text-gray-500 hover:text-gray-900">Features</a>

								<a href="#" class="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>

								<a href="#" class="font-medium text-gray-500 hover:text-gray-900">Company</a>

								<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Log in</a>
							</div> 
						</nav>  
					 -->
					</div>

					<!--
			Mobile menu, show/hide based on menu open state.
  
			Entering: "duration-150 ease-out"
			  From: "opacity-0 scale-95"
			  To: "opacity-100 scale-100"
			Leaving: "duration-100 ease-in"
			  From: "opacity-100 scale-100"
			  To: "opacity-0 scale-95"
		  -->
					<div
						class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
					>
						<div
							class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
						>
							<div class="px-5 pt-4 flex items-center justify-between">
								<div>
									<!-- below image icon is for the mobile menu -->
									<img
										class="h-8 w-auto"
										src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
										alt=""
									/>
								</div>
								<div class="-mr-2">
									<button
										type="button"
										class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
									>
										<span class="sr-only">Close main menu</span>
										<!-- Heroicon name: outline/x -->
										<svg
											class="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</div>
							<div class="px-2 pt-2 pb-3 space-y-1">
								<a
									href="#"
									class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
									>Product</a
								>

								<a
									href="#"
									class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
									>Features</a
								>

								<a
									href="#"
									class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
									>Marketplace</a
								>

								<a
									href="#"
									class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
									>Company</a
								>
							</div>
							<a
								href="#"
								class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
							>
								Log in
							</a>
						</div>
					</div>
				</div>

				<main
					class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
				>
					<div class="sm:text-center lg:text-left">
						<h1
							class="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
						>
							<span class="block xl:inline">Matts Marine Services</span>
							<span class="block text-blue-400 xl:inline">Tagline here</span>
						</h1>
						<p
							class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
						>
							Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
							commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
						</p>
						<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
							<div class="rounded-md shadow">
								<a
									href="#"
									class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
								>
									Get started
								</a>
							</div>
							<div class="mt-3 sm:mt-0 sm:ml-3">
								<a
									href="#"
									class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
								>
									Live demo
								</a>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
		<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
			<img
				class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
				src="https://source.unsplash.com/k3PGtUb10rU/1600x900"
				alt="marina at sunset"
			/>
		</div>
	</div>
</section>

<style>
</style>
