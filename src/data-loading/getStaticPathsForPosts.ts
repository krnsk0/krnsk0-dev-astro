import { getAllPosts } from './getAllPosts';

export async function getStaticPathsForPosts() {
  const posts = await getAllPosts();

  return posts.map(({ frontmatter: { slug, title, date }, Content }) => {
    return {
      params: {
        slug,
      },
      props: { Content, title, date },
    };
  });
}
