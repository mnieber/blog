import { Inter } from 'next/font/google';
import './globals.css';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

const inter = Inter({ subsets: ['latin'] });

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
          inter.className,
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
