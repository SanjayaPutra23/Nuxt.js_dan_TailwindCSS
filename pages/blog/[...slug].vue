<script setup>
definePageMeta({
	layout: 'app',
});

useHead({
	title: 'Blog',
});
</script>

<template>
	<article class="prose dark:prose-invert">
		<ContentDoc />
	</article>
</template>
