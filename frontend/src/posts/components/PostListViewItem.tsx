import { observer } from 'mobx-react-lite';
import React from 'react';
import { dps, withDefaultProps } from '/src/app/defaultProps';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './PostListViewItem.scss';

export type PropsT = {
  onClick?: (e: React.MouseEvent) => void;
  className?: any;
};

const DefaultProps = {
  ...dps.post,
};

export const PostListViewItem = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    const showShortTitle = true;

    return (
      //
      // 🔳 PostListViewItem 🔳
      //
      <div
        tabIndex={0}
        className={cn(
          'PostListViewItem',
          'grow',
          //
          //
          L.col.flagPole(),
          'sm:items-center',
          props.className
        )}
      >
        {
          // 🔳 Title 🔳
        }
        <div className={cn('PostListViewItem__Title', 'sm:text-center')}>
          {showShortTitle && props.post.shortTitle}
          {!showShortTitle && props.post.title}
        </div>
        {
          // 🔳 Subtitle 🔳
        }
        <div className={cn('PostListViewItem__Subtitle')}>
          {props.post.title}
        </div>
      </div>
    );
  }, DefaultProps)
);
