'use client';

import { PostView } from '/src/posts/components/PostView';
import { getPostAndChapterFromPathname } from '/src/posts/getPostAndChapterFromPathname';

export type PropsT = React.PropsWithChildren<{
  chapterSlug: string;
}>;

export const ChapterLayout = (props: PropsT) => {
  const { post, chapter } = getPostAndChapterFromPathname(props.chapterSlug);
  return (
    <PostView post={post} chapter={chapter}>
      {props.children}
    </PostView>
  );
};
