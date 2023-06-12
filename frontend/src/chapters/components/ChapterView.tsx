import * as React from 'react';
import { ChapterT } from '/src/api/types/ChapterT';
import { PostT } from '/src/api/types/PostT';
import { ChapterNav } from '/src/chapters/components/ChapterNav';
import { Comments } from '/src/chapters/components/Comments';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './ChapterView.scss';

export type PropsT = React.PropsWithChildren<{
  className?: any;
  post: PostT;
  chapter: ChapterT;
}>;

export const ChapterView = (props: PropsT) => {
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
      {props.post.chapters.length > 1 && (
        <div className={cn('ChapterView__Title', 'mb-4')}>
          {props.chapter.title}
        </div>
      )}
      {props.children}
      {props.post.chapters.length > 1 && (
        <ChapterNav
          post={props.post}
          chapter={props.chapter}
          className="mt-8"
        />
      )}
      <Comments className="mt-12 mb-8" />
    </div>
  );
};
