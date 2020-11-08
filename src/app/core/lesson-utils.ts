import {Word} from './word';
import {Lesson} from './lesson';
import {v4 as uuid} from 'uuid';

export const generateLessons = (words: Word[], capacity: number): Lesson[] => {
  const lessons = [];
  while (words.length > 0) {
    lessons.push({
      words: words.splice(0, capacity).map((word, index) => ({
        ...word,
        index,
        id: uuid(),
      })),
      title: '',
      id: uuid(),
    });
  }

  return lessons;
};
