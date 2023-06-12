import '/src/frames/styles/index.scss';

import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

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
