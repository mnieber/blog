import { ChapterT } from '/src/api/types/ChapterT';

export type PostT = {
  id: string;
  slug: string;
  title: string;
  date: string;
  shortTitle: string;
  shortTeaser: string;
  chapters: ChapterT[];
};

export type PostByIdT = { [id: string]: PostT };
