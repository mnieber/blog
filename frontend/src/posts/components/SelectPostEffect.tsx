import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';
import * as R from 'ramda';
import React from 'react';
import { PostT } from '/src/api/types/PostT';
import { dps, withDefaultProps } from '/src/app/defaultProps';
import { useSearchAndUrlParams } from '/src/utils/hooks';

type PropsT = {};

const DefaultProps = {
  ...dps.posts,
  ...dps.postsHighlight,
};

export const SelectPostEffect = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    const params = useSearchAndUrlParams();

    React.useEffect(() => {
      return autorun(() => {
        const post = R.find((x: PostT) => x.slug === params.postSlug)(
          props.posts
        );

        if (post && props.postsHighlight.id !== post.id) {
          props.postsHighlight.highlightItem({ id: post.id });
        } else if (props.posts.length && !post && params.postSlug) {
          nav.goToPosts();
        }
      });
    }, [params, props.posts, props.postsHighlight]);

    return null;
  }, DefaultProps)
);
