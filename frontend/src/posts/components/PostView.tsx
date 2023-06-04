import { observer } from 'mobx-react-lite';
import React from 'react';
import { GatsbyChapterT } from '/src/api/types/ChapterT';
import { GatsbyPostT } from '/src/api/types/PostT';
import { ChapterListView } from '/src/chapters/components/ChapterListView';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './PostView.scss';

export type PropsT = React.PropsWithChildren<{
  className?: any;
  post: GatsbyPostT;
  chapter: GatsbyChapterT;
  chapters: GatsbyChapterT[];
}>;

export const PostView = observer((props: PropsT) => {
  if (!props.post) {
    return null;
  }

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
          {props.chapters.length > 1 && (
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
          {props.chapters.length > 1 && (
            <ChapterListView
              post={props.post}
              chapter={props.chapter}
              chapters={props.chapters}
              className={cn('')}
            />
          )}
        </div>
      </div>
      {props.children}
    </div>
  );
});
