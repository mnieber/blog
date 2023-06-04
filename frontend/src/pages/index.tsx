// Import styles. This needs to be done before importing any components.
import '/src/frames/styles/index.scss';

import type { HeadFC, PageProps } from 'gatsby';

import { action, toJS } from 'mobx';
import { applyFormatters } from 'mobx-log';
import React from 'react';
import { setOptions } from 'skandha';
import { flags } from '/src/app/flags';
import { Dashboard } from '/src/dashboard/components/Dashboard';
import { DashboardStateProvider } from '/src/dashboard/components/DashboardStateProvider';
import { AppFrame } from '/src/frames/components/AppFrame';
import { L, breakpoints } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './index.scss';

if (process.env.NODE_ENV === 'development') {
  applyFormatters();
}

setOptions({
  logging: flags.logSkandha,
  formatObject: toJS,
  decorateCb: action,
});

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main
      className={cn(
        'IndexPage',
        //
        //
        L.col.banner(),
        `min-width-[${breakpoints.xs}] h-[100vh] overflow-x-hidden`
      )}
    >
      <DashboardStateProvider>
        <AppFrame>
          <Dashboard></Dashboard>
        </AppFrame>
      </DashboardStateProvider>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
