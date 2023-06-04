import loadable from '@loadable/component';
import React from 'react';
import { PostView } from '/src/posts/components/PostView';

const MdxComponent = loadable(
  () =>
    import('/src/content/posts/styling-system-inline-styles-scss/chapter-1.mdx')
);

export type PropsT = {
  pageContext: any;
};

const GatsbyChapter = (props: PropsT) => {
  const { chapter, chapters, mdxFn } = props.pageContext;

  return (
    <PostView post={chapter.post} chapters={chapters} chapter={chapter}>
      <div>Hello {mdxFn}</div>
      {<MdxComponent />}
    </PostView>
  );
};

export default GatsbyChapter;
