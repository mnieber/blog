import { Redirect } from 'react-router-dom';
import { withDefaultProps } from '/src/app/defaultProps';
import { ChapterView } from '/src/chapters/components/ChapterView';
import { ForwardToChapterEffect } from '/src/chapters/components/ForwardToChapterEffect';
import { SelectChapterEffect } from '/src/chapters/components/SelectChapterEffect';
import { AphorismsView } from '/src/dashboard/components/AphorismsView';
import { Dashboard } from '/src/dashboard/components/Dashboard';
import { SelectMainMenuItemEffect } from '/src/dashboard/components/SelectMainMenuItemEffect';
import { PostListView } from '/src/posts/components/PostListView';
import { PostView } from '/src/posts/components/PostView';
import { SelectPostEffect } from '/src/posts/components/SelectPostEffect';
import { Route } from '/src/routes/components/Route';
import { useRoutes } from '/src/routes/hooks/useRoutes';
export type PropsT = {};

const DefaultProps = {};

export const DashboardSwitch = withDefaultProps(
  (props: PropsT & typeof DefaultProps) => {
    const routes = useRoutes();

    return (
      <Dashboard>
        <Route exact={true} path="/">
          <Redirect to={routes.posts()} />
        </Route>
        <Route path={routes.posts()}>
          <SelectMainMenuItemEffect menuItem="posts" />
          {
            // 🔳 Show a particular post 🔳
          }
          <Route path={routes.post()}>
            <SelectPostEffect />
            <Route exact path={routes.post()}>
              <ForwardToChapterEffect />
            </Route>
            <Route path={routes.chapters()}>
              {
                // 🔳 Show PostView at a particular chapter 🔳
              }
              <Route exact path={routes.chapter()}>
                <SelectChapterEffect />
                <PostView className="mt-16">
                  <ChapterView className="mt-12" />
                </PostView>
              </Route>
            </Route>
          </Route>
          {
            // 🔳 Show list of posts 🔳
          }
          <Route exact path={routes.posts()}>
            <PostListView className="mt-12" />
          </Route>
        </Route>
        {
          // 🔳 Show aphorisms 🔳
        }
        <Route exact path={routes.aphorisms()}>
          <SelectMainMenuItemEffect menuItem="aphorisms" />
          <AphorismsView className="mt-12 pb-8" />
        </Route>
      </Dashboard>
    );
  },
  DefaultProps
);
