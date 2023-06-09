import Component from './chapter-1.mdx';
import { getPosts } from '/src/api/queries/getPosts';
import { ChapterView } from '/src/chapters/components/ChapterView';

export default function Page() {
  const posts = getPosts({});
  const post = posts[0];
  return (
    <ChapterView
      post={post}
      chapter={post.chapters[0]}
      mdxComponent={Component}
    />
  );
}
