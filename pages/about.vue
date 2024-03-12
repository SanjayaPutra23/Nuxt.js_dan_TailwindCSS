<script setup>
definePageMeta({
	layout: 'app',
});

useHead({
	title: 'About',
});
</script>

<template>
	<article class="prose dark:prose-invert">
		<h1 class="text-2xl font-bold mb-10">About</h1>
		<ContentDoc path="/about" />
	</article>
</template>
