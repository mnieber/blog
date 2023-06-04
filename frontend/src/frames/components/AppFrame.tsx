import { observer } from 'mobx-react-lite';
import React from 'react';
import { withDefaultProps } from '/src/app/defaultProps';
import { Banner } from '/src/frames/components/Banner';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './AppFrame.scss';

export type PropsT = React.PropsWithChildren<{
  className?: any;
}>;

const DefaultProps = {};

export const AppFrame = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    return (
      <div className={cn('AppFrame', L.col.banner(), 'p-8')}>
        <Banner />
        {props.children}
      </div>
    );
  }, DefaultProps)
);
