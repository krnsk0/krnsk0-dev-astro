import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import htmlMinifier from 'astro-html-minifier';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://krnsk0.dev',
  integrations: [
    mdx(),
    sitemap(),
    htmlMinifier(),
    partytown({
      forward: ['dataLayer.push'],
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
