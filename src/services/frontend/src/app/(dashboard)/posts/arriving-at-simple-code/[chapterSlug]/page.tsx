'use client';

import Chapter1 from './chapter-1.mdx';
import { ChapterLayout } from '/src/chapters/components/ChapterLayout';

export default function Page({ params }: any) {
  const chapterSlug = params.chapterSlug;

  return (
    <ChapterLayout postSlug="arriving-at-simple-code" chapterSlug={chapterSlug}>
      {chapterSlug === 'chapter-1' && <Chapter1 />}
    </ChapterLayout>
  );
}

export async function generateStaticParams() {
  return [{ chapterSlug: 'chapter-1' }];
}
