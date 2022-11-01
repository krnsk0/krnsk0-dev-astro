import rss from '@astrojs/rss';

const postImportResult = import.meta.glob('../posts/**/*.mdx', { eager: true });
const posts = Object.values(postImportResult);

export const get = () => {
  return rss({
    title: 'krnsk0.dev',
    description: "Jon Kurinsky's developer blog",
    site: import.meta.env.SITE,
    items: posts
      .filter((post) => post.frontmatter.draft === false)
      .map((post) => {
        return {
          link: post.url,
          title: post.frontmatter.title,
          pubDate: post.frontmatter.pubDate,
        };
      }),
    stylesheet: 'rss_styles.xsl',
  });
};
