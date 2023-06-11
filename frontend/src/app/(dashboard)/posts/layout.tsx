'use client';

import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { PostView } from '/src/posts/components/PostView';
import { CodeSnippet } from '/src/snippets/components/CodeSnippet';
import { TabView } from '/src/snippets/components/TabView';

export type PropsT = React.PropsWithChildren<{}>;

const PostLayout = (props: PropsT) => {
  const components = {
    CodeSnippet: CodeSnippet,
    TabView: TabView,
  };

  return (
    <MDXProvider components={components}>
      <PostView>{props.children}</PostView>
    </MDXProvider>
  );
};

export default PostLayout;
