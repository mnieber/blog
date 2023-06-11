import React from 'react';
import { getPosts } from '/src/api/queries/getPosts';
import { ChapterT } from '/src/api/types/ChapterT';
import { PostT } from '/src/api/types/PostT';
import { ChapterListView } from '/src/chapters/components/ChapterListView';
import { ChapterView } from '/src/chapters/components/ChapterView';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';
import { pathname } from '/src/utils/urls';

// Import styles
import './PostView.scss';

export type PropsT = React.PropsWithChildren<{
  className?: any;
}>;

export const PostView = (props: PropsT) => {
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
    // 🔳 PostView 🔳
    //
    <div
      className={cn(
        'PostView',
        //
        //
        'max-w-[800px]',
        L.col.banner(),
        props.className
      )}
    >
      {
        // 🔳 Header 🔳
      }
      <div
        className={cn(
          'PostView__Header',
          //
          L.row.banner()
        )}
      >
        {
          // 🔳 Index 🔳
        }
        <div
          className={cn(
            'PostView__Index',
            //
            //
            L.col.banner(),
            'py-8 px-16',
            'w-full'
          )}
        >
          {
            // 🔳 Title and meta 🔳
          }
          <div className={cn('PostView__Title')}>{post.title}</div>
          <div className={cn('PostView__Meta', 'mt-1')}>{post.date}</div>
          {post.chapters.length > 1 && (
            <div
              className={cn(
                'PostView__IndexSeparator',
                'border-t border-gray-700',
                'w-[200px]',
                'my-8'
              )}
            />
          )}
          {
            // 🔳 Chapter list 🔳
          }
          {post.chapters.length > 1 && (
            <ChapterListView post={post} chapter={chapter} className={cn('')} />
          )}
        </div>
      </div>
      <ChapterView post={post} chapter={chapter}>
        {props.children}
      </ChapterView>
    </div>
  );
};
