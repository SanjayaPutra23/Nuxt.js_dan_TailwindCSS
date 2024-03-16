<script setup lang="ts">
definePageMeta({
	layout: 'app',
});

useHead({
	title: 'Home',
});
</script>

<template>
	<article class="prose dark:prose-invert max-w-none">
		<ContentDoc path="/" />
	</article>
</template>
