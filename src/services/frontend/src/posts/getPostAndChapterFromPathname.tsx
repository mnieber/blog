import { getPosts } from '/src/api/queries/getPosts';
import { ChapterT } from '/src/api/types/ChapterT';
import { PostT } from '/src/api/types/PostT';

export function getPostAndChapterFromPathname(
  postSlug: string,
  chapterSlug: string
) {
  const posts = getPosts({});

  const post = posts.find((post) => post.slug === postSlug) as PostT;
  console.assert(post, 'post not found');

  const chapter = post.chapters.find(
    (chapter) => chapter.slug === chapterSlug
  ) as ChapterT;
  console.assert(
    chapter,
    'chapter not found:',
    chapterSlug,
    'in post',
    postSlug
  );
  return { post, chapter };
}
