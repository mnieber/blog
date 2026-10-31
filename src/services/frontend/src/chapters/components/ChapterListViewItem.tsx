import Link from 'next/link';
import { ChapterT, getChapterLink } from '/src/api/types/ChapterT';
import { PostT } from '/src/api/types/PostT';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './ChapterListViewItem.scss';

export type PropsT = {
  className?: any;
  isActive: boolean;
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
        {
          'ChapterListViewItem--active': props.isActive,
        },
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
        href={getChapterLink(props.post, props.chapter)}
        className={cn(
          'ChapterListViewItem__Title',
          {
            'ChapterListViewItem__Title--active': props.isActive,
          },
          //
          'self-stretch'
        )}
      >
        {props.chapter.title}
      </Link>
    </div>
  );
};
