import { getPosts } from '/src/api/queries';
import { PostT } from '/src/api/types/PostT';
import { L } from '/src/frames/layout';
import { PostListViewItem } from '/src/posts/components/PostListViewItem';
import { cn } from '/src/utils/classnames';

// Import styles
import './PostListView.scss';

export const PostListView = () => {
  const noItems = <h2>There are no posts</h2>;
  const posts = getPosts({});

  const postDivs = posts.map((post: PostT, idx: number) => {
    return (
      <PostListViewItem
        key={`item-${post.id}`}
        post={post}
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
        'w-full'
      )}
    >
      {postDivs.length > 0 && postDivs}
      {postDivs.length === 0 && noItems}
    </div>
  );
};
