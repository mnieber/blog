'use client';

import Chapter1 from './chapter-1.mdx';
import { ChapterLayout } from '/src/chapter/components/ChapterLayout';
import { ObjT } from '/src/utils/types';

export type PropsT = {
  params: ObjT;
};

export default function Page(props: PropsT) {
  const chapterSlug = props.params.chapterSlug;
  return (
    <ChapterLayout postSlug="arriving-at-simple-code" chapterSlug={chapterSlug}>
      {chapterSlug === 'chapter-1' && <Chapter1 />}
    </ChapterLayout>
  );
}

export async function generateStaticParams() {
  return [{ params: { chapterSlug: 'chapter-1' } }];
}
