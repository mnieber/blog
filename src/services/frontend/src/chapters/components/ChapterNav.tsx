import Link from 'next/link';
import { ChapterT, getChapterLink } from '/src/api/types/ChapterT';
import { PostT } from '/src/api/types/PostT';
import { Icon } from '/src/frames/components/Icon';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './ChapterNav.scss';

export type PropsT = {
  className?: any;
  post: PostT;
  chapter: ChapterT;
};

export const ChapterNav = (props: PropsT) => {
  const itemDivs = props.post.chapters.map((chapter: ChapterT, idx: number) => {
    const isActive = props.chapter?.id === chapter.id;
    return (
      <Link
        key={chapter.id}
        href={getChapterLink(props.post, chapter)}
        className={cn(
          'ChapterNav__Item',
          //
          //
          L.col.skewer(),
          'justify-center',
          {
            'ChapterNav__Item--active': isActive,
            'ChapterNav__Item--passive': !isActive,
          }
        )}
      >
        {idx + 1}
      </Link>
    );
  });

  const chapterIdx = props.post.chapters.findIndex(
    (chapter) => chapter.id === props.chapter?.id
  );
  const prevChapter =
    chapterIdx > 0 ? props.post.chapters[chapterIdx - 1] : null;
  const nextChapter =
    chapterIdx < props.post.chapters.length - 1
      ? props.post.chapters[chapterIdx + 1]
      : null;

  return (
    <div
      className={cn(
        'ChapterNav',
        //
        //
        L.row.skewer(),
        'justify-center gap-1 text-xs font-medium',
        props.className
      )}
    >
      {prevChapter && (
        <Link href={getChapterLink(props.post, prevChapter)}>
          <Icon className={cn('ChapterNav__Icon', 'mr-2')} name="arrow-left" />
        </Link>
      )}

      {itemDivs}

      {nextChapter && (
        <Link href={getChapterLink(props.post, nextChapter)}>
          <Icon className={cn('ChapterNav__Icon', 'ml-2')} name="arrow-right" />
        </Link>
      )}
    </div>
  );
};
