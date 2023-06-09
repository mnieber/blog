import { getPosts } from '/src/api/queries';
import { PostT } from '/src/api/types/PostT';
import { L } from '/src/frames/layout';
import { PostListViewItem } from '/src/posts/components/PostListViewItem';
import { cn } from '/src/utils/classnames';

// Import styles
import './PostListView.scss';

export type PropsT = {
  className?: any;
};

export const PostListView = async (props: PropsT) => {
  const noItems = <h2>There are no posts</h2>;
  const postsData = await getPosts({});
  const posts = postsData.posts;

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
        'w-full',
        props.className
      )}
    >
      {postDivs.length > 0 && postDivs}
      {postDivs.length === 0 && noItems}
    </div>
  );
};
