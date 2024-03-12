<script setup>
useHead({
	titleTemplate: '%s - Porto',
	link: [
		{
			rel: 'preconnect',
			href: 'https://fonts.googleapis.com',
		},
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
			crossorigin: 'anonymous',
		},
	],
});

useSeoMeta({
	title: 'Porto - My Amazing Site',
	description: 'This is my amazing site, let me tell you all about it.',
	ogTitle: 'My Amazing Site',
	ogDescription: 'This is my amazing site, let me tell you all about it.',
	ogImage: 'https://example.com/image.png',
	twitterCard: 'summary_large_image',
	twitterTitle: 'Porto - My Amazing Site',
	twitterDescription: 'This is my amazing site, let me tell you all about it.',
});

const colorMode = useColorMode();
console.log(colorMode.preference);
</script>

<template>
	<div class="container mx-auto">
		<Header />
		<main class="p-2 mt-10">
			<slot />
		</main>
	</div>
</template>

<style>
body {
	font-family: 'Roboto', sans-serif;
}

body {
	@apply bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100;
}
</style>
