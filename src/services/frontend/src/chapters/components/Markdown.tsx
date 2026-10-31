export type PropsT = React.PropsWithChildren<{}>;

// Import styles
import './Markdown.scss';

export const Markdown = (props: PropsT) => {
  return <div className="Markdown">{props.children}</div>;
};
