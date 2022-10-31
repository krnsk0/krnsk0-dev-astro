import { describe, it, expect } from 'vitest';
import type { Posts } from './getAllPosts';
import { getPostsWithYearSeparators } from './getPostsWithYearSeparators';

describe('The getPostsWithYearSeparators function', () => {
  it('returns the empty array with no posts passed in', () => {
    expect(getPostsWithYearSeparators([])).toEqual([]);
  });

  it('inserts separators', () => {
    const testPosts = [
      { frontmatter: { pubDate: new Date('December 17, 2023') } },
      { frontmatter: { pubDate: new Date('December 17, 2022') } },
      { frontmatter: { pubDate: new Date('December 20, 1996') } },
      { frontmatter: { pubDate: new Date('December 17, 1996') } },
      { frontmatter: { pubDate: new Date('December 17, 1995') } },
    ] as unknown as Posts;
    expect(getPostsWithYearSeparators(testPosts)).toEqual([
      { postYear: '2023' },
      { frontmatter: { pubDate: new Date('December 17, 2023') } },
      { postYear: '2022' },
      { frontmatter: { pubDate: new Date('December 17, 2022') } },
      { postYear: '1996' },
      { frontmatter: { pubDate: new Date('December 20, 1996') } },
      { frontmatter: { pubDate: new Date('December 17, 1996') } },
      { postYear: '1995' },
      { frontmatter: { pubDate: new Date('December 17, 1995') } },
    ]);
  });
});
