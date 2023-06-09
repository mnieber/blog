import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './Menu.scss';

export type PropsT = {
  className?: any;
};

export const Menu = (props: PropsT) => {
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
          'Menu__Item--active': true,
        })}
      >
        posts
      </div>
      <div
        className={cn('Menu__Item', 'ml-6', {
          'Menu__Item--active': false,
        })}
      >
        aphorisms
      </div>
      <div
        className={cn('Menu__Item', 'ml-6', {
          'Menu__Item--active': false,
        })}
      >
        about me
      </div>
    </div>
  );
};
