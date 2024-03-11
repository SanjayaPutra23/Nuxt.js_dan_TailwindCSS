<script setup>
definePageMeta({
	layout: 'app',
});

useHead({
	title: 'Project',
});

const { error, pending, data } = await useFetch(
	'https://api.github.com/users/lunadiotic/repos'
);
</script>

<template>
	<div>
		<h1>Project</h1>
		<section v-if="pending">Loading...</section>
		<section v-else-if="error">Something went wrong</section>
		<section v-else>{{ data }}</section>
	</div>
</template>
