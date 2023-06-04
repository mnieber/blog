import { QueryClientProvider } from '@tanstack/react-query';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import { queryClient } from '/src/api/queryClient';
import { DashboardStateProvider } from '/src/dashboard/components/DashboardStateProvider';
import { L, breakpoints } from '/src/frames/layout';
import { PostsStateProvider } from '/src/posts/components/PostsStateProvider';
import { UrlRouter } from '/src/routes/components';
import { cn } from '/src/utils/classnames';

export const history = createBrowserHistory();

export const App = () => {
  const appRef = React.useRef<HTMLDivElement>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <div
          ref={appRef}
          id="App"
          className={cn(
            'App',
            //
            //
            L.col.banner(),
            `min-width-[${breakpoints.xs}] h-[100vh] overflow-x-hidden`
          )}
        >
          <PostsStateProvider>
            <DashboardStateProvider appRef={appRef}>
              <UrlRouter />
            </DashboardStateProvider>
          </PostsStateProvider>
        </div>
      </Router>
    </QueryClientProvider>
  );
};
