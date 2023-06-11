'use client';

import React from 'react';
import { ChapterT } from '/src/api/types/ChapterT';
import { PostT } from '/src/api/types/PostT';
import { ChapterListView } from '/src/chapters/components/ChapterListView';
import { ChapterView } from '/src/chapters/components/ChapterView';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './PostView.scss';

export type PropsT = React.PropsWithChildren<{
  className?: any;
  post: PostT;
  chapter: ChapterT;
}>;

export const PostView = (props: PropsT) => {
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
          <div className={cn('PostView__Title')}>{props.post.title}</div>
          <div className={cn('PostView__Meta', 'mt-1')}>{props.post.date}</div>
          {props.post.chapters.length > 1 && (
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
          {props.post.chapters.length > 1 && (
            <ChapterListView
              post={props.post}
              chapter={props.chapter}
              className={cn('')}
            />
          )}
        </div>
      </div>
      <ChapterView post={props.post} chapter={props.chapter}>
        {props.children}
      </ChapterView>
    </div>
  );
};
