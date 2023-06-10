import Link from 'next/link';
import { getChapterLink } from '/src/api/types/ChapterT';
import { PostT } from '/src/api/types/PostT';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './PostListViewItem.scss';

export type PropsT = {
  post: PostT;
  className?: any;
};

export const PostListViewItem = (props: PropsT) => {
  const showShortTitle = true;

  return (
    //
    // 🔳 PostListViewItem 🔳
    //
    <div
      tabIndex={0}
      className={cn(
        'PostListViewItem',
        'grow',
        //
        //
        L.col.flagPole(),
        'sm:items-center',
        props.className
      )}
    >
      {
        // 🔳 Title 🔳
      }
      <Link
        href={getChapterLink(props.post, props.post.chapters[0])}
        className={cn('PostListViewItem__Title', 'sm:text-center')}
      >
        {showShortTitle && props.post.shortTitle}
        {!showShortTitle && props.post.title}
      </Link>
      {
        // 🔳 Subtitle 🔳
      }
      <div className={cn('PostListViewItem__Subtitle')}>{props.post.title}</div>
    </div>
  );
};
