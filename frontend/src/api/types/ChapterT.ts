import { PostT } from '/src/api/types/PostT';

export type ChapterT = {
  id: string;
  slug: string;
  title: string;
};

export type ChapterByIdT = { [id: string]: ChapterT };

export function getChapterLink(post: PostT, chapter: ChapterT) {
  return `/posts/${post.slug}/chapters/${chapter.slug}`;
}
