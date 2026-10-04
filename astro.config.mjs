// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const site = 'https://piekarnia-jedynka.pl';

// https://astro.build/config
export default defineConfig({
    site,
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
});
