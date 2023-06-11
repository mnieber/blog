'use client';

import Component from './chapter-2.mdx';
import { ChapterLayout } from '/src/chapter/components/ChapterLayout';

export default function Page() {
  return (
    <ChapterLayout chapterSlug="chapter-2">
      <Component />
    </ChapterLayout>
  );
}
