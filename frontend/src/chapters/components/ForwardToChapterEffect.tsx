import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { dps, withDefaultProps } from '/src/app/defaultProps';
import { useSearchAndUrlParams } from '/src/utils/hooks';

type PropsT = {};

const DefaultProps = {
  ...dps.post,
};

export const ForwardToChapterEffect = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    const params = useSearchAndUrlParams();

    React.useEffect(() => {
      return autorun(() => {
        if (
          props.post &&
          props.post.slug === params.postSlug &&
          props.post.chapters.length
        ) {
          // nav.goToChapter(props.post, props.post.chapters[0]);
        }
      });
    }, [params, props.post]);

    return null;
  }, DefaultProps)
);
