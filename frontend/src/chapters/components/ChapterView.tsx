import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { dps, withDefaultProps } from '/src/app/defaultProps';
import { Comments } from '/src/chapters/components/Comments';
import { ChapterNav } from '/src/frames/components/ChapterNav';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './ChapterView.scss';

export type PropsT = {
  className?: any;
};

const DefaultProps = {
  ...dps.chapters,
  ...dps.chapter,
  ...dps.post,
  ...dps.appRef,
};

export const ChapterView = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    React.useEffect(() => {
      if (props.chapter && props.appRef.current) {
        props.appRef.current.scrollTop = 0;
      }
    }, [props.chapter]);

    if (!props.chapter) {
      return null;
    }

    const Component: any = props.chapter.component ?? FallbackComponent;

    return (
      //
      // 🔳 ChapterView 🔳
      //
      <div
        className={cn(
          'ChapterView',
          //
          //
          L.col.banner(),
          'max-w-[800px]',
          props.className
        )}
      >
        {
          // 🔳 Title 🔳
        }
        {props.chapters.length > 1 && (
          <div className={cn('ChapterView__Title', 'mb-4')}>
            {props.chapter.title}
          </div>
        )}
        {<Component />}
        {props.chapters.length > 1 && <ChapterNav className="mt-8" />}
        <Comments className="mt-12 mb-8" />
      </div>
    );
  }, DefaultProps)
);

export const FallbackComponent = () => {
  return <div>No component has been installed</div>;
};
