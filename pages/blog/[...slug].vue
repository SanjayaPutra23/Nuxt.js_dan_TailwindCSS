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
			<div class="grid grid-cols-6 gap-16">
				<div class="col-span-4">
					<ContentRenderer :value="doc" />
				</div>
				<div class="col-span-2 not-prose">
					<aside class="sticky top-8">
						<div class="font-semibold mb-2">Table of Contents</div>
						<nav>
							<TocLink :links="doc.body.toc.links" />
						</nav>
					</aside>
				</div>
			</div>
		</ContentDoc>
	</article>
</template>
