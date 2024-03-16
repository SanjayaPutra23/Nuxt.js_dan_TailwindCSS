<script setup>
const { error } = defineProps({ error: Object });
console.log(error);
</script>

<template>
	<NuxtLayout name="app">
		<section>
			<h1 class="mb-4 text-4xl">Oops {{ error.statusCode }}</h1>
			<h2 class="text-xl text-gray-600 dark:text-gray-300">
				{{ error.statusMessage }}
			</h2>
		</section>
	</NuxtLayout>
</template>
