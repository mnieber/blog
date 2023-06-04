import { ObjT } from '/src/utils/types';

type WordData = {
  word: string;
  id: string;
};

export const createWordDatas = (title: string) => {
  const words = title.split(' ');
  const result = [];
  const wordCount: ObjT = {};
  for (const word of words) {
    wordCount[word] = (wordCount[word] ?? 0) + 1;
    const id = `${word}-${wordCount[word]}`;
    result.push({
      word,
      id,
    } as WordData);
  }
  return result;
};
