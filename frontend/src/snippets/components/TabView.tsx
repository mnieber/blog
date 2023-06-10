'use client';

import React from 'react';
import './TabView.scss';
import { TabHeader } from '/src/snippets/components/TabHeader';
import { cn } from '/src/utils/classnames';

// Import styles
import './TabView.scss';

export type PropsT = React.PropsWithChildren<{
  titles: string[];
  className?: any;
}>;

export const TabView = (props: PropsT) => {
  const [codeBlockIdx, setCodeBlockIdx] = React.useState<number>(0);

  const tabs = props.titles.map((title: string, idx: number) => {
    return (
      <TabHeader
        key={idx}
        active={idx === codeBlockIdx}
        onClick={() => setCodeBlockIdx(idx)}
      >
        {title}
      </TabHeader>
    );
  });

  const tabDivs =
    React.Children.map(props.children, (child: any, idx: number) => {
      return (
        <div className={cn(idx === codeBlockIdx ? 'visible' : 'hidden')}>
          {child}
        </div>
      );
    }) ?? [];

  return (
    <div className={cn('TabView', 'my-4')}>
      <div className="TabView__Tabs">{tabs}</div>
      {tabDivs}
    </div>
  );
};
