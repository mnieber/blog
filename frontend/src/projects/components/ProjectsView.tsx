import { Markdown } from '/src/chapters/components/Markdown';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

export type PropsT = React.PropsWithChildren<{}>;

export const ProjectsView = (props: PropsT) => {
  //
  return (
    <div className={cn('ProjectsView', 'w-full min-w-full', L.col.banner())}>
      <Markdown>{props.children}</Markdown>
    </div>
  );
};
