'use client';

import Chapter1 from './chapter-1.mdx';
import Chapter2 from './chapter-2.mdx';
import Chapter3 from './chapter-3.mdx';
import Chapter4 from './chapter-4.mdx';
import { ChapterLayout } from '/src/chapter/components/ChapterLayout';
import { ObjT } from '/src/utils/types';

export type PropsT = {
  params: ObjT;
};

export default function Page(props: PropsT) {
  const chapterSlug = props.params.chapterSlug;
  return (
    <ChapterLayout
      postSlug="compile-env-for-managing-environment-variables"
      chapterSlug={chapterSlug}
    >
      {chapterSlug === 'chapter-1' && <Chapter1 />}
      {chapterSlug === 'chapter-2' && <Chapter2 />}
      {chapterSlug === 'chapter-3' && <Chapter3 />}
      {chapterSlug === 'chapter-4' && <Chapter4 />}
    </ChapterLayout>
  );
}

export async function generateStaticParams() {
  return [
    { params: { chapterSlug: 'chapter-1' } },
    { params: { chapterSlug: 'chapter-2' } },
    { params: { chapterSlug: 'chapter-3' } },
    { params: { chapterSlug: 'chapter-4' } },
  ];
}
