import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import htmlMinifier from 'astro-html-minifier';
import image from '@astrojs/image';

export default defineConfig({
  site: 'https://krnsk0.dev',
  integrations: [mdx(), sitemap(), htmlMinifier(), image()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
