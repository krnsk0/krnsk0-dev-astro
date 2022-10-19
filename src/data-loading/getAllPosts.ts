import { Frontmatter, FrontmatterSchema } from './postTypes';

function isObject(x: unknown): x is Record<string, unknown> {
  return typeof x === 'object' && x !== null;
}

function hasProp<K extends PropertyKey>(
  x: object,
  prop: K
): x is Record<K, unknown> {
  return prop in x;
}

export interface Post {
  frontmatter: Frontmatter;
  Content: () => unknown;
}
export type Posts = Post[];

export async function getAllPosts(): Promise<Posts> {
  const rawImports = import.meta.glob('../posts/*.mdx', { eager: true });

  const unsortedPosts = Object.values(rawImports).map((file: unknown) => {
    if (
      isObject(file) &&
      hasProp(file, 'frontmatter') &&
      hasProp(file, 'Content')
    ) {
      // this will fail if frontmatter is missing
      const frontmatter = FrontmatterSchema.parse(file.frontmatter);
      return {
        frontmatter,
        // Content is an astro commponent; safe to make this assertion here
        Content: file.Content as () => unknown,
      };
    } else {
      throw new Error('file missing required property');
    }
  });

  return unsortedPosts.sort(
    (a, b) => b.frontmatter.pubDate.getTime() - a.frontmatter.pubDate.getTime()
  );
}
