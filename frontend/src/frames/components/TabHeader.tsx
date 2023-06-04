import React from 'react';
import { cn } from '/src/utils/classnames';

// Import styles
import './TabHeader.scss';

export type PropsT = React.PropsWithChildren<{
  active?: boolean;
  disabled?: boolean;
  [k: string]: any;
}>;

export const TabHeader = (props: PropsT) => {
  const { children, active, disabled, ...others } = props;
  return (
    <div className="flex-1" {...others}>
      <div
        className={cn('TabHeader', {
          'TabHeader--active': props.active,
          'TabHeader--passive': !props.active,
        })}
      >
        {props.active && <span className="TabHeader__Inset--active"></span>}
        {props.children}
      </div>
    </div>
  );
};
