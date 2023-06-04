import React from 'react';
import { PostsState } from '/src/posts/PostsState';
import { useBuilder } from '/src/utils/hooks/useBuilder';

export type PropsT = {};

export const usePostsState = (props: PropsT) => {
  const postsState = useBuilder(() => {
    return new PostsState({});
  });

  React.useEffect(() => () => postsState.destroy(), [postsState]);

  return {
    postsState,
  };
};
