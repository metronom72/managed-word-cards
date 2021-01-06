import {Word} from './word';
import { v4 as uuid } from 'uuid';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Group} from './group';

export const generateGroups = (words: Word[], capacity: number): Array<FormGroup> => {
  const groups: Array<FormGroup> = [];
  while (words.length > 0) {
    groups.push(new FormGroup({
      words: new FormArray(
        words
          .splice(0, capacity)
          .map((word: any, index) => generateWord(word, index))
      ),
      title: new FormControl(
        '',
        [Validators.required]
      ),
    }));
  }

  return groups;
};

export const generateWord = (word: any = {}, index) => new FormGroup({
    id: new FormControl(
      word.id || uuid(),
      []
    ),
    original: new FormControl(
      (word.russian || '').trim(),
      [Validators.required]
    ),
    target: new FormControl(
      (word.german || '').trim(),
      [Validators.required]
    ),
    index: new FormControl(
      index,
      []
    ),
  });
