<script setup>
const { error, pending, data } = await useFetch(
	'https://api.github.com/users/SanjayaPutra23/repos',
	{
		lazy: true,
	}
);

const repos = computed(() => {
	return data.value
		.filter((repo) => repo.description)
		.sort((a, b) => b.stargazers_count - a.stargazers_count);
});
</script>
<template>
	<section class="not-prose">
		<section v-if="pending">Loading...</section>
		<section v-else-if="error">Something went wrong</section>
		<section v-else>
			<ul class="grid grid-cols-1 gap-4">
				<li
					v-for="(repo, index) in repos"
					:key="index"
					class="border border-gray-200 rounded-md p-4 font-mono hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
				>
					<a :href="repo.html_url" target="_blank">
						<div class="flex items-center justify-between text-sm">
							<div class="font-semibold">{{ repo.name }}</div>
							<div>{{ repo.stargazers_count }} ★</div>
						</div>
						<p class="text-sm">
							{{ repo.description }}
						</p>
					</a>
				</li>
			</ul>
		</section>
	</section>
</template>
