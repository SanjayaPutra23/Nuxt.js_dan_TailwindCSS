<script setup>
defineProps({
	limit: {
		type: Number,
		default: null,
	},
});
</script>

<template>
	<BlogLists v-slot="{ posts }" :limit="limit">
		<div v-for="post in posts" :key="post.id">
			<NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
		</div>
	</BlogLists>
</template>
