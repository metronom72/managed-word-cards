import {Word} from './word';
import {Group} from './group';

export const generateGroups = (words: Word[], capacity: number): Group[] => {
  const groups = [];
  while (words.length > 0) {
    groups.push({
      words: words.splice(0, capacity).map((word: any, index) => ({
        ...word,
        original: word.russian,
        target: word.german,
        index,
      })),
      title: '',
    });
  }

  return groups;
};
