<script setup>
definePageMeta({
	layout: 'app',
});

useHead({
	title: 'Blog',
});

const { data: posts } = await useAsyncData('blog-list', () => {
	return queryContent('blog')
		.where({ _path: { $ne: '/blog' } })
		.only(['_path', 'title'])
		.find();
});
</script>

<template>
	<section class="not-prose">
		<ul>
			<li v-for="(post, index) in posts" :key="index">
				<NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
			</li>
		</ul>
	</section>
</template>
