import React from 'react';
import { Banner } from '/src/frames/components/Banner';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './layout.scss';

export type PropsT = React.PropsWithChildren<{
  className?: any;
}>;

const DashboardLayout = (props: PropsT) => {
  return (
    <div className={cn('DashboardLayout', L.col.banner(), 'p-8')}>
      <div
        className={cn(
          'DashboardLayout__Body',
          //
          //
          'max-w-[800px] mx-auto'
        )}
      >
        <Banner />
        {props.children}
      </div>
    </div>
  );
};

export default DashboardLayout;
