'use client';

import Chapter1 from './chapter-1.mdx';
import Chapter2 from './chapter-2.mdx';
import Chapter3 from './chapter-3.mdx';
import Chapter4 from './chapter-4.mdx';
import { ChapterLayout } from '/src/chapters/components/ChapterLayout';

export default function Page({ params }: any) {
  const chapterSlug = params.chapterSlug;
  console.assert(chapterSlug);

  return (
    <ChapterLayout postSlug="skandha" chapterSlug={chapterSlug}>
      {chapterSlug === 'chapter-1' && <Chapter1 />}
      {chapterSlug === 'chapter-2' && <Chapter2 />}
      {chapterSlug === 'chapter-3' && <Chapter3 />}
      {chapterSlug === 'chapter-4' && <Chapter4 />}
    </ChapterLayout>
  );
}

export async function generateStaticParams() {
  return [
    { chapterSlug: 'chapter-1' },
    { chapterSlug: 'chapter-2' },
    { chapterSlug: 'chapter-3' },
    { chapterSlug: 'chapter-4' },
  ];
}
