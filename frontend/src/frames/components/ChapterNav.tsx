import { observer } from 'mobx-react-lite';
import { ChapterT } from '/src/api/types/ChapterT';
import { dps, withDefaultProps } from '/src/app/defaultProps';
import { Icon } from '/src/frames/components/Icon';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './ChapterNav.scss';

export type PropsT = {
  className?: any;
};

const DefaultProps = {
  ...dps.post,
  ...dps.chapters,
  ...dps.chaptersHighlight,
};

export const ChapterNav = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    const nav = useNav();

    const itemDivs = props.chapters.map((chapter: ChapterT, idx: number) => {
      const isActive = props.chaptersHighlight?.id === chapter.id;
      return (
        <div
          key={chapter.id}
          onClick={() => {
            nav.goToChapter(props.post, chapter);
          }}
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
        </div>
      );
    });

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
        <div>
          <Icon
            className={cn('ChapterNav__Icon', 'mr-2')}
            name="arrow-left"
            onClick={() => {
              const chapterIdx = props.chapters.findIndex(
                (chapter) => chapter.id === props.chaptersHighlight?.id
              );
              if (chapterIdx > 0) {
                nav.goToChapter(props.post, props.chapters[chapterIdx - 1]);
              }
            }}
          />
        </div>

        {itemDivs}

        <div>
          <Icon
            className={cn('ChapterNav__Icon', 'ml-2')}
            name="arrow-right"
            onClick={() => {
              const chapterIdx = props.chapters.findIndex(
                (chapter) => chapter.id === props.chaptersHighlight?.id
              );
              if (chapterIdx < props.chapters.length - 1) {
                nav.goToChapter(props.post, props.chapters[chapterIdx + 1]);
              }
            }}
          />
        </div>
      </div>
    );
  }, DefaultProps)
);
