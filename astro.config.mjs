import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from '@astrojs/mdx';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      open: true,
    },
  },
  site: 'https://krnsk0.dev',
  integrations: [mdx(), sitemap()],
});
