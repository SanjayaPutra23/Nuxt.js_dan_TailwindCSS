<template>
	<header class="flex justify-between items-start md:items-center mt-5">
		<div class="flex items-center md:space-x-12">
			<div class="hidden md:block">
				<NuxtLink to="/" class="text-xl font-semibold link">Porto</NuxtLink>
			</div>
			<nav class="font-mono">
				<ul class="flex flex-col md:flex-row md:space-x-4">
					<li><NuxtLink to="/" class="link">Home</NuxtLink></li>
					<li><NuxtLink to="/about" class="link">About</NuxtLink></li>
					<li><NuxtLink to="/project" class="link">Project</NuxtLink></li>
					<li><NuxtLink to="/blog" class="link">Blog</NuxtLink></li>
				</ul>
			</nav>
		</div>
		<ClientOnly>
			<ColorModeSelector />
		</ClientOnly>
	</header>
</template>

<style scoped>
.link {
	@apply p-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-2xl  md:text-base;
}
</style>
