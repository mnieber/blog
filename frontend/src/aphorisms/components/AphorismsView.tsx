import { aphorisms } from '/src/api/data/aphorisms';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './AphorismsView.scss';

export type PropsT = {
  className?: any;
};

export const AphorismsView = (props: PropsT) => {
  const divs = aphorisms.map((aphorism, idx) => {
    return (
      <div
        key={`aphorism-${idx}`}
        className={cn('AphorismsView__Item', idx > 0 ? 'mt-8' : '')}
      >
        {aphorism.text}
      </div>
    );
  });

  return (
    <div
      className={cn(
        'AphorismsView',
        //
        //
        L.col.flagPole(),
        props.className
      )}
    >
      {divs}
    </div>
  );
};
