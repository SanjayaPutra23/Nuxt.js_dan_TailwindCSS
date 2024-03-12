<script setup>
definePageMeta({
	layout: 'app',
});

useHead({
	title: 'Project',
});
</script>

<template>
	<div>
		<h1 class="text-2xl font-bold mb-10">Project</h1>
		<ProjectList />
	</div>
</template>
