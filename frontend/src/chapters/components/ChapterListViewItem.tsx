import Link from 'next/link';
import { ChapterT, getChapterLink } from '/src/api/types/ChapterT';
import { PostT } from '/src/api/types/PostT';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './ChapterListViewItem.scss';

export type PropsT = {
  className?: any;
  post: PostT;
  chapter: ChapterT;
};

export const ChapterListViewItem = (props: PropsT) => {
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
        to={getChapterLink(props.post, props.chapter)}
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
};
