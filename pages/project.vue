<script setup>
definePageMeta({
	layout: 'app',
});

useHead({
	title: 'Project',
});
</script>

<template>
	<article class="prose dark:prose-invert max-w-none">
		<ContentDoc path="/project" />
	</article>
</template>
