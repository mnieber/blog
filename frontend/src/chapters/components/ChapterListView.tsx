import { ChapterT } from '/src/api/types/ChapterT';
import { PostT } from '/src/api/types/PostT';
import { ChapterListViewItem } from '/src/chapters/components/ChapterListViewItem';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './ChapterListView.scss';

export type PropsT = {
  className?: any;
  post: PostT;
  chapter?: ChapterT;
};

export const ChapterListView = (props: PropsT) => {
  const noItems = <h2>There are no chapters</h2>;

  const chapterDivs = props.post.chapters.map(
    (chapter: ChapterT, idx: number) => {
      return (
        <ChapterListViewItem
          key={`item-${chapter.id}`}
          chapter={chapter}
          className={cn(
            idx > 0 ? 'mt-4' : '',
            chapter.id === props.chapter?.id ? 'text-primaryGreen' : ''
          )}
        />
      );
    }
  );

  return (
    <div className={cn('ChapterListView', L.col.banner(), props.className)}>
      {chapterDivs.length > 0 && chapterDivs}
      {chapterDivs.length === 0 && noItems}
    </div>
  );
};
