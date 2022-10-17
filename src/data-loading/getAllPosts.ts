import { Frontmatter, FrontmatterSchema } from './postTypes';

function isObject(x: unknown): x is Record<string, unknown> {
  return typeof x === 'object' && x !== null;
}

function hasProp<K extends PropertyKey>(
  data: object,
  prop: K
): data is Record<K, unknown> {
  return prop in data;
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
        Content: file.Content,
      };
    } else {
      throw new Error('file missing required property');
    }
  });

  return unsortedPosts.sort(
    (a, b) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime()
  );
}
