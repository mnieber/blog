'use client';

import Chapter1 from './chapter-1.mdx';
import { ChapterLayout } from '/src/chapters/components/ChapterLayout';

export default function Page({ params }: any) {
  const chapterSlug = params.chapterSlug;
  console.assert(chapterSlug);

  return (
    <ChapterLayout postSlug="predictable-code-generation" chapterSlug={chapterSlug}>
      {chapterSlug === 'chapter-1' && <Chapter1 />}
    </ChapterLayout>
  );
}

export async function generateStaticParams() {
  return [{ chapterSlug: 'chapter-1' }];
}
