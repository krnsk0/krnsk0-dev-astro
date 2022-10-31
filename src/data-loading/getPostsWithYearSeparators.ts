import type { Post, Posts } from './getAllPosts';
import type { PostYearDescriptor } from './postTypes';

export type PostsWithYearDescriptors = Array<PostYearDescriptor | Post>;

export function isYearSeparator(
  x: PostYearDescriptor | Post
): x is PostYearDescriptor {
  return !!(x as PostYearDescriptor).postYear;
}

export function getPostsWithYearSeparators(
  posts: Posts
): PostsWithYearDescriptors {
  let lastSeenYear = -Infinity;

  const output: PostsWithYearDescriptors = [];

  posts.forEach((post) => {
    const postYear = post.frontmatter.pubDate.getFullYear();
    if (postYear > lastSeenYear) {
      lastSeenYear = postYear;
      output.push({ postYear: postYear.toString() });
    }
    output.push(post);
  });

  return output;
}
