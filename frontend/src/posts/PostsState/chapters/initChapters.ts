import { setCallbackMap } from 'aspiration';
import {
  addCleanUpFunctionToCtr,
  cleanUpCtr,
} from 'react-default-props-context';
import { HighlightCbs } from 'skandha-facets';
import { PostsState, PropsT } from '/src/posts/PostsState';

export const initChapters = (state: PostsState, props: PropsT) => {
  const ctr = state.chaptersCtr;
  addCleanUpFunctionToCtr(state, () => cleanUpCtr(ctr));

  setCallbackMap(ctr.highlight, {
    highlightItem: {},
  } as HighlightCbs);
};
