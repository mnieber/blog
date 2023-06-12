import { PostView } from '/src/posts/components/PostView';
import { getPostAndChapterFromPathname } from '/src/posts/getPostAndChapterFromPathname';

export type PropsT = React.PropsWithChildren<{
  postSlug: string;
  chapterSlug: string;
}>;

export const ChapterLayout = (props: PropsT) => {
  const { post, chapter } = getPostAndChapterFromPathname(
    props.postSlug,
    props.chapterSlug
  );

  return (
    <PostView post={post} chapter={chapter}>
      {props.children}
    </PostView>
  );
};
