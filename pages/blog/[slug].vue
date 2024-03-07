<script setup>
const route = useRoute();
console.log(route);
</script>

<template>
	<h1>Blog</h1>
	<p>This is an {{ route.params.slug }} page</p>
</template>
