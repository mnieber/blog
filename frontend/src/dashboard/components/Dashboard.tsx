import { observer } from 'mobx-react-lite';
import React from 'react';
import { withDefaultProps } from '/src/app/defaultProps';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './Dashboard.scss';

export type PropsT = React.PropsWithChildren<{
  className?: any;
}>;

const DefaultProps = {};

export const Dashboard = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    return (
      //
      // 🔳 DashBoard 🔳
      //
      <div
        className={cn(
          'Dashboard',
          'grow',
          //
          //
          L.col.skewer(),
          props.className
        )}
      >
        {props.children}
      </div>
    );
  }, DefaultProps)
);
