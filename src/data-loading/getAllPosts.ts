import { FrontmatterSchema, Posts, ViteImportReturnSchema } from './postTypes';

export async function getAllPosts(): Promise<Posts> {
  const rawPosts = import.meta.glob('../posts/*.mdx', { eager: true });

  return Object.values(rawPosts).map((fileObject) => {
    const file = ViteImportReturnSchema.parse(fileObject);
    const frontmatter = FrontmatterSchema.parse(file.frontmatter);
    return {
      frontmatter,
    };
  });
}
