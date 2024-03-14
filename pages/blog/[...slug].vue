<script setup>
definePageMeta({
	layout: 'app',
});

useHead({
	title: 'Blog',
});
</script>

<template>
	<article
		class="prose dark:prose-invert prose-pre:bg-gray-200 dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
	>
		<ContentDoc v-slot="{ doc }">
			<pre>
				{{ doc.body.toc.links }}
			</pre
			>
			<ContentRenderer :value="doc" />
		</ContentDoc>
	</article>
</template>
