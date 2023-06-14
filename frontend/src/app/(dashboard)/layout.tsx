import React from 'react';
import { Banner } from '/src/frames/components/Banner';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './layout.scss';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
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
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
