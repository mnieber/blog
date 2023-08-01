'use client';

import Giscus from '@giscus/react';

export type PropsT = {
  className?: any;
};

export const Comments = (props: PropsT) => {
  return (
    <div className={props.className}>
      <Giscus
        id="comments"
        repo="mnieber/blog-comments"
        repoId="R_kgDOJoUTXQ"
        category="Announcements"
        categoryId="DIC_kwDOJoUTXc4CWyLi"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </div>
  );
};

<script
  src="https://giscus.app/client.js"
  mapping="specific"
  term="foobar"
  strict="1"
  crossorigin="anonymous"
  async
></script>;
