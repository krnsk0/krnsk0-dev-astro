import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
  site: 'https://krnsk0.dev',
  integrations: [
    mdx(),
    sitemap(),
    prefetch({
      throttle: 3,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
