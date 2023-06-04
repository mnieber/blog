import { observer } from 'mobx-react-lite';
import React from 'react';
import { dps, withDefaultProps } from '/src/app/defaultProps';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './Menu.scss';

export type PropsT = {
  className?: any;
};

const DefaultProps = {
  ...dps.dashboardState,
};

export const Menu = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    return (
      <div
        className={cn(
          'Menu',
          //
          //
          L.row.banner(),
          props.className
        )}
      >
        <div
          className={cn('Menu__Item', {
            'Menu__Item--active': props.dashboardState.mainMenuItem === 'posts',
          })}
        >
          posts
        </div>
        <div
          className={cn('Menu__Item', 'ml-6', {
            'Menu__Item--active':
              props.dashboardState.mainMenuItem === 'aphorisms',
          })}
        >
          aphorisms
        </div>
        <div
          className={cn('Menu__Item', 'ml-6', {
            'Menu__Item--active': props.dashboardState.mainMenuItem === 'about',
          })}
        >
          about me
        </div>
      </div>
    );
  }, DefaultProps)
);
