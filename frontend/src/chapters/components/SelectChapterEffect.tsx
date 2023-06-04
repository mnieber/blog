import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';
import * as R from 'ramda';
import React from 'react';
import { ChapterT } from '/src/api/types/ChapterT';
import { dps, withDefaultProps } from '/src/app/defaultProps';
import { useSearchAndUrlParams } from '/src/utils/hooks';

type PropsT = {};

const DefaultProps = {
  ...dps.chaptersHighlight,
  ...dps.post,
  ...dps.chapters,
};

export const SelectChapterEffect = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    const params = useSearchAndUrlParams();

    React.useEffect(() => {
      return autorun(() => {
        const chapterId = R.find(
          (x: ChapterT) => x.slug === params.chapterSlug
        )(props.chapters)?.id;
        // If the chapter slug in the url is missing or invalid, then go to the first
        // chapter in the playlist.
        if (R.isNil(params.chapterSlug)) {
          const chapter = R.head(props.chapters);
          if (chapter) {
            // nav.goToChapter(props.post, chapter);
          }
        }
        // If the chapter slug in the url is valid, but the corresponding chapterId is
        // not highlighted, then select it.
        else if (chapterId && props.chaptersHighlight.id !== chapterId) {
          props.chaptersHighlight.highlightItem({ id: chapterId });
        }
      });
    }, [params, props.chapters, props.chaptersHighlight]);

    return null;
  }, DefaultProps)
);
