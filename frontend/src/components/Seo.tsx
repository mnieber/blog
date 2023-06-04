import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

export type PropsT = {
  title?: string;
};

const Seo = (props: PropsT) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return <title>{props.title ?? data.site.siteMetadata.title}</title>;
};

export default Seo;
