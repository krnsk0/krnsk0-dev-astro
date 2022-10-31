import rss from '@astrojs/rss';

export const get = () => {
  return rss({
    title: 'krnsk0.dev',
    description: "Jon Kurinsky's developer blog",
    site: import.meta.env.SITE,
    items: import.meta.glob('../posts/**/*.mdx'),
    stylesheet: 'rss_styles.xsl',
  });
};
