export type ChapterT = {
  id: string;
  slug: string;
  title: string;
  component?: React.ReactNode;
};

export type ChapterByIdT = { [id: string]: ChapterT };

export type GatsbyChapterT = {
  id: string;
  title: string;
  mdxBody: string;
};

export function getChapterLink(chapter: any) {
  return `/posts/${chapter.post.slug}/chapters/${chapter.slug}`;
}
