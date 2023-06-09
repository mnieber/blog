'use client';

import { useSelectedLayoutSegments } from 'next/navigation';

import Link from 'next/link';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

type MenuItemT = 'posts' | 'aphorisms' | 'about-me';

// Import styles
import './Menu.scss';

export type PropsT = {
  className?: any;
};

export const Menu = (props: PropsT) => {
  const segments = useSelectedLayoutSegments();
  const segment: MenuItemT = segments[0];
  console.log('segments', segments);

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
      <Link
        href="/posts"
        className={cn('Menu__Item', {
          'Menu__Item--active': segment === 'posts',
        })}
      >
        posts
      </Link>
      <Link
        href="/aphorisms"
        className={cn('Menu__Item', 'ml-6', {
          'Menu__Item--active': segment === 'aphorisms',
        })}
      >
        aphorisms
      </Link>
      <Link
        href="/about-me"
        className={cn('Menu__Item', 'ml-6', {
          'Menu__Item--active': segment === 'about-me',
        })}
      >
        about me
      </Link>
    </div>
  );
};
