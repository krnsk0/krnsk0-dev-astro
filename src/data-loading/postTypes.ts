import z from 'zod';

export const dateSchema = z.preprocess((arg) => {
  if (typeof arg == 'number') return new Date(arg);
  else throw new Error('cannot parse date');
}, z.date());
export type DateSchema = z.infer<typeof dateSchema>;

/**
 * Useful for enforcing shape of frontmatter
 */
export const FrontmatterSchema = z.object({
  title: z.string(),
  pubDate: dateSchema,
  description: z.string(),
  slug: z.string(),
  draft: z.boolean(),
});
export type Frontmatter = z.infer<typeof FrontmatterSchema>;

/**
 * A separator between posts showing the post yearh
 */
export interface PostYearDescriptor {
  postYear: string;
}
