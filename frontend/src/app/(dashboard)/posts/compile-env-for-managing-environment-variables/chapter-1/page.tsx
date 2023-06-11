'use client';

import Component from './chapter-1.mdx';
import { ChapterLayout } from '/src/chapter/components/ChapterLayout';

export default function Page() {
  return (
    <ChapterLayout chapterSlug="chapter-1">
      <Component />
    </ChapterLayout>
  );
}
