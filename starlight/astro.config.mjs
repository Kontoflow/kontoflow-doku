// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://kontoflow.github.io/',
  	base: '/kontoflow-doku',
	integrations: [
		starlight({
			title: 'Kontoflow Dokumentation',
			social: {
				github: 'https://github.com/Kontoflow/kontoflow-doku',
			},
			sidebar: [
				{
					label: 'Installation',
					autogenerate: { directory: 'installation' },
				},
				{
					label: 'Bedienung',
					autogenerate: { directory: 'bedienung' },
				},
				{
					label: 'Changelog',
					autogenerate: { directory: 'changelog' },
				}
			],
		}),
	],
});
