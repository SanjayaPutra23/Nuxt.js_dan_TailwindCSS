// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true, timeline: { enabled: true } },
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content'],
	colorMode: {
		classSuffix: '',
	},
	content: {
		highlight: {
			theme: {
				// Default theme (same as single string)
				default: 'github-light',
				// Theme used if `html.dark`
				dark: 'github-dark',
				// Theme used if `html.sepia`
				sepia: 'monokai',
			},
		},
	},
});
