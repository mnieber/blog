import { graphql } from 'gatsby';
import React from 'react';
import Seo from '/src/components/Seo';

export type PropsT = {
  data: any;
};

const BlogPage = (props: PropsT) => {
  const divs = props.data.allMdx.nodes.map((node: any) => (
    <article key={node.id}>
      <h2>{node.frontmatter.title}</h2>
    </article>
  ));

  return (
    <div>
      <p>On the blog page</p>
      {divs}
    </div>
  );
};

export const Head = () => <Seo />;

export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        frontmatter {
          title
          type
        }
        internal {
          contentFilePath
        }
      }
    }
  }
`;

export default BlogPage;
