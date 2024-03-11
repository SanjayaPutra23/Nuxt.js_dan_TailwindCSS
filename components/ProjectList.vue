<script setup>
const {
	error,
	pending,
	data: repos,
} = await useFetch('https://api.github.com/users/lunadiotic/repos');
</script>
<template>
	<div>
		<p class="mb-10">This is a list of my projects</p>

		<section v-if="pending">Loading...</section>
		<section v-else-if="error">Something went wrong</section>
		<section v-else>
			<ul class="grid grid-cols-1 gap-4">
				<li
					v-for="(repo, index) in repos"
					:key="index"
					class="border border-gray-200 rounded-md p-4 font-mono hover:bg-gray-100 cursor-pointer"
				>
					<div class="flex items-center justify-between text-sm">
						<div class="font-semibold">{{ repo.name }}</div>
						<div>{{ repo.stargazers_count }} ★</div>
					</div>
					<p class="text-sm">
						{{ repo.description }}
					</p>
				</li>
			</ul>
		</section>
	</div>
</template>
