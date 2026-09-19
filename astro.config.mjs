// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: podmienić na właściwą przed wdrożeniem
const site = 'https://piekarniajedynka.pl';

// https://astro.build/config
export default defineConfig({
    site,
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
});
