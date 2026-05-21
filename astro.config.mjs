// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://ryanwtf7.github.io',
	base: '/animo-app',
	integrations: [
		starlight({
			title: 'ANIMO',
			description: 'Stream and download anime from multiple sources',
			logo: {
				src: './src/assets/logo.png',
				replacesTitle: true,
			},
			favicon: '/animo-app/logo.png',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/ryanwtf7/animo-app' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/W2GheK3F9m' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Download', slug: 'download' },
						{ label: 'About', slug: 'about' },
					],
				},
				{
					label: 'Features',
					items: [
						{ label: 'Overview', slug: 'features' },
					],
				},
			],
		}),
	],
});
