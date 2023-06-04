import { observer } from 'mobx-react-lite';
import { Highlight } from 'skandha-facets';
import { useHighlightUIConnector } from 'skandha-mobx/hooks';
import { PostT } from '/src/api/types/PostT';
import { dps, withDefaultProps } from '/src/app/defaultProps';
import { L } from '/src/frames/layout';
import { PostListViewItem } from '/src/posts/components/PostListViewItem';
import { cn } from '/src/utils/classnames';

// Import styles
import './PostListView.scss';

export type PropsT = {
  className?: any;
};

const DefaultProps = {
  ...dps.posts,
  ...dps.postsHighlight,
};

export const PostListView = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    const highlightUIConnector = useHighlightUIConnector(
      props.postsHighlight as Highlight<PostT>,
      {
        getDomElement: (id: string, idx: number) =>
          document.querySelectorAll('.PostListViewItem')[idx],
      }
    );

    const noItems = <h2>There are no posts</h2>;

    const postDivs = props.posts.map((post, idx) => {
      return (
        <PostListViewItem
          key={`item-${post.id}`}
          post={post}
          highlightUIProps={highlightUIConnector.handle(post.id)}
          onClick={(e: any) => nav.goToPost(post)}
          className={cn(idx > 0 ? 'mt-8' : '')}
        />
      );
    });

    return (
      <div
        className={cn(
          'PostListView',
          //
          //
          L.col.flagPole(),
          'sm:items-center',
          'w-full',
          props.className
        )}
      >
        {postDivs.length > 0 && postDivs}
        {postDivs.length === 0 && noItems}
      </div>
    );
  }, DefaultProps)
);
