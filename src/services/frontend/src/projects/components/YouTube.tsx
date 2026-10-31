'use client';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { cn } from '/src/utils/classnames';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export type PropsT = {
  videoId: string;
  title: string;
  className?: any;
};

export const YouTube = (props: PropsT) => {
  return (
    <div className={cn('w-full', props.className)}>
      <div className={cn('max-w-[800px]')}>
        <LiteYouTubeEmbed
          aspectHeight={9}
          aspectWidth={16}
          id={props.videoId}
          title={props.title}
        />
      </div>
    </div>
  );
};
