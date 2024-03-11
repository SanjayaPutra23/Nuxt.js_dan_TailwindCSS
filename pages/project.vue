<script setup>
definePageMeta({
	layout: 'app',
});

useHead({
	title: 'Project',
});

const project = await useFetch('https://api.github.com/users/lunadiotic/repos');
console.log(project);
</script>

<template>
	<h1>Project</h1>
</template>
