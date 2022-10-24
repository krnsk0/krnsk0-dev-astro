import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import htmlMinifier from 'astro-html-minifier';

export default defineConfig({
  site: 'https://krnsk0.dev',
  integrations: [mdx(), sitemap(), htmlMinifier()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
