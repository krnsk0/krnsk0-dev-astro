import { Frontmatter, FrontmatterSchema } from './postTypes';

export interface Post {
  frontmatter: Frontmatter;
  Content: () => unknown;
}
export type Posts = Post[];

export async function getAllPosts(): Promise<Posts> {
  const rawPosts = import.meta.glob('../posts/*.mdx', { eager: true });

  return Object.values(rawPosts).map((file: any) => {
    // this will fail if frontmatter is missing
    const frontmatter = FrontmatterSchema.parse(file.frontmatter);
    return {
      frontmatter,
      Content: file.Content,
    };
  });
}
