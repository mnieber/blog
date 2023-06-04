import { setCallbackMap } from 'aspiration';
import {
  addCleanUpFunctionToCtr,
  cleanUpCtr,
} from 'react-default-props-context';
import { HighlightCbs } from 'skandha-facets';
import { PostsState, PropsT } from '/src/posts/PostsState';

export const initPosts = (state: PostsState, props: PropsT) => {
  const ctr = state.postsCtr;
  addCleanUpFunctionToCtr(state, () => cleanUpCtr(ctr));

  setCallbackMap(ctr.highlight, {
    highlightItem: {},
  } as HighlightCbs);
};
