import { observer } from 'mobx-react-lite';
import React from 'react';
import { withDefaultProps } from '/src/app/defaultProps';
import { Menu } from '/src/frames/components/Menu';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './Banner.scss';

export type PropsT = {
  className?: any;
};

const DefaultProps = {};

export const Banner = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    return (
      <div
        className={cn(
          'Banner',
          //
          //
          L.col.skewer(),
          props.className
        )}
      >
        <div className={cn('Banner__SiteName')}>maarten nieber's blog</div>
        <div
          className={cn(
            'Banner__MenuSeparator__',
            'border-t border-gray-700 border-dashed',
            //
            //
            'my-2',
            'self-stretch',
            'max-w-[400px]',
            'w-full',
            'mx-auto'
          )}
        />
        <Menu className="mb-8" />
      </div>
    );
  }, DefaultProps)
);
