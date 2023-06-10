'use client';

import * as React from 'react';
import { getPosts } from '/src/api/queries/getPosts';
import { ChapterT } from '/src/api/types/ChapterT';
import { PostT } from '/src/api/types/PostT';
import { ChapterNav } from '/src/chapters/components/ChapterNav';
import { Comments } from '/src/chapters/components/Comments';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';
import { pathname } from '/src/utils/urls';

// Import styles
import './ChapterView.scss';

export type PropsT = React.PropsWithChildren<{
  className?: any;
}>;

export const ChapterView = (props: PropsT) => {
  const segments = pathname().split('/');
  const posts = getPosts({});

  const post = posts.find(
    (post) => post.slug === segments[segments.length - 2]
  ) as PostT;
  console.assert(post, 'post not found');

  const chapter = post.chapters.find(
    (chapter) => chapter.slug === segments[segments.length - 1]
  ) as ChapterT;
  console.assert(chapter, 'chapter not found');

  return (
    //
    // 🔳 ChapterView 🔳
    //
    <div
      className={cn(
        'ChapterView',
        //
        //
        L.col.banner(),
        'max-w-[800px]',
        props.className
      )}
    >
      {
        // 🔳 Title 🔳
      }
      {post.chapters.length > 1 && (
        <div className={cn('ChapterView__Title', 'mb-4')}>{chapter.title}</div>
      )}
      {props.children}
      {post.chapters.length > 1 && (
        <ChapterNav post={post} chapter={chapter} className="mt-8" />
      )}
      <Comments className="mt-12 mb-8" />
    </div>
  );
};
