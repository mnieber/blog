import { Link } from 'gatsby';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { GatsbyChapterT, getChapterLink } from '/src/api/types/ChapterT';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './ChapterListViewItem.scss';

export type PropsT = {
  className?: any;
  chapter: GatsbyChapterT;
};

export const ChapterListViewItem = observer((props: PropsT) => {
  return (
    //
    // 🔳 ChapterListViewItem 🔳
    //
    <div
      tabIndex={0}
      className={cn(
        'ChapterListViewItem',
        //
        //
        L.col.skewer(),
        props.className
      )}
    >
      {
        // 🔳 Title 🔳
      }
      <Link
        to={getChapterLink(props.chapter)}
        className={cn(
          'ChapterListViewItem__Title',
          //
          'self-stretch'
        )}
      >
        {props.chapter.title}
      </Link>
    </div>
  );
});
