import { Menu } from '/src/frames/components/Menu';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './Banner.scss';

export type PropsT = {
  className?: any;
};

export const Banner = (props: PropsT) => {
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
      <div className={cn('Banner__SiteName')}>{`maarten nieber's blog`}</div>
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
      <Menu className="mb-12" />
    </div>
  );
};
