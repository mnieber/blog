import { stub, withDefaultProps } from 'react-default-props-context';
import { Highlight } from 'skandha-facets';
import { AphorismT } from '/src/api/types/AphorismT';
import { ChapterT } from '/src/api/types/ChapterT';
import { PostT } from '/src/api/types/PostT';
import { DashboardState } from '/src/dashboard/DashboardState';
import { PostsState } from '/src/posts/PostsState';
export { stub, withDefaultProps } from 'react-default-props-context';

// This is a workaround for a bug in webpack
!withDefaultProps && (console as any).log(withDefaultProps);

const dpsStates = {
  postsState: {
    postsState: stub as PostsState,
  },
  dashboardState: {
    dashboardState: stub as DashboardState,
  },
  aphorisms: {
    aphorisms: stub as AphorismT[],
  },
  appRef: {
    appRef: stub as React.RefObject<HTMLDivElement>,
  },
};

const dpsPosts = {
  posts: {
    posts: stub as PostT[],
  },
  post: {
    post: stub as PostT,
  },
  postsHighlight: {
    postsHighlight: stub as Highlight,
  },
};

const dpsChapters = {
  chapters: {
    chapters: stub as ChapterT[],
  },
  chapter: {
    chapter: stub as ChapterT,
  },
  chaptersHighlight: {
    chaptersHighlight: stub as Highlight,
  },
};

export const defaultProps = {
  ...dpsStates,
  ...dpsPosts,
  ...dpsChapters,
};

export const dps = defaultProps;
