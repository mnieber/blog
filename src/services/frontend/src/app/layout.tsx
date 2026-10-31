import { Inter, Karla, Open_Sans } from 'next/font/google';
import '/src/frames/styles/index.scss';

import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

export const interBold = Inter({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-inter',
});

export const openSans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const openSansBold = Open_Sans({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-open-sans-bold',
});

export const karla = Karla({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-karla',
});

export const karlaMedium = Karla({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-karla-medium',
});

export const karlaBold = Karla({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-karla-bold',
});

// Import styles
import './layout.scss';

export const metadata = {
  title: "Maarten Nieber's blog",
};

export type PropsT = {
  children: React.ReactNode;
};

const RootLayout = (props: PropsT) => {
  return (
    <html lang="en">
      <body
        className={cn(
          'RootLayout',
          //
          //
          L.col.banner()
        )}
      >
        {props.children}
      </body>
    </html>
  );
};

export default RootLayout;
