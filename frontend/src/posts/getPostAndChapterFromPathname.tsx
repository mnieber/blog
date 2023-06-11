import { getPosts } from '/src/api/queries/getPosts';
import { ChapterT } from '/src/api/types/ChapterT';
import { PostT } from '/src/api/types/PostT';
import { pathname } from '/src/utils/urls';

export function getPostAndChapterFromPathname(chapterSlug: string) {
  const segments = pathname().split('/');
  const posts = getPosts({});

  const post = posts.find(
    (post) => post.slug === segments[segments.length - 2]
  ) as PostT;
  console.assert(post, 'post not found');

  const chapter = post.chapters.find(
    (chapter) => chapter.slug === chapterSlug
  ) as ChapterT;
  console.assert(chapter, 'chapter not found');
  return { post, chapter };
}
