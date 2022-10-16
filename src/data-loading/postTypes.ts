import z from 'zod';

export const ViteImportReturnSchema = z.object({
  frontmatter: z.unknown(),
});
export type ViteImportReturn = z.infer<typeof ViteImportReturnSchema>;

export const dateSchema = z.preprocess((arg) => {
  if (typeof arg == 'number') return new Date(arg);
  else throw new Error('cannot parse date');
}, z.date());
export type DateSchema = z.infer<typeof dateSchema>;

export const FrontmatterSchema = z.object({
  title: z.string(),
  date: dateSchema,
  published: z.boolean(),
  description: z.string(),
  word_count: z.number(),
  slug: z.string(),
});
export type Frontmatter = z.infer<typeof FrontmatterSchema>;

export interface Post {
  frontmatter: Frontmatter;
}
export type Posts = Post[];
