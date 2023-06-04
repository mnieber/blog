import { cn } from '/src/utils/classnames';

// Import styles
import './Example.scss';

export type PropsT = {
  text: string;
};

export const Example = (props: PropsT) => {
  return (
    <div className={cn('Example flex flex-row flex-wrap', 'px-8 py-4')}>
      {'Example:' + props.text}
    </div>
  );
};
