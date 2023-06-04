import { RouteTable } from '/src/routes/utils/RouteTable';

export const getRouteTable = () => {
  const routeTable = new RouteTable();

  routeTable.addRoutes({
    aphorisms: () => '/aphorisms',
    home: () => '/posts',
    posts: () => '/posts',
    post: () => '/posts/:postSlug',
    chapters: () => '/posts/:postSlug/chapters',
    chapter: () => '/posts/:postSlug/chapters/:chapterSlug',
  });

  return routeTable;
};
