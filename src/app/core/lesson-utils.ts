import {Word} from './word';
import { v4 as uuid } from 'uuid';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

export const generateGroups = (words: Word[], capacity: number): FormArray => {
  const groups = [];
  while (words.length > 0) {
    groups.push(new FormGroup({
      words: new FormArray(words.splice(0, capacity).map((word: any, index) => (new FormGroup({
        // ...word,
        id: new FormControl(word.id || uuid(), []),
        original: new FormControl(word.russian, [Validators.required]),
        target: new FormControl(word.german, [Validators.required]),
        index: new FormControl(index, []),
      })))),
      title: new FormControl('', [Validators.required]),
    }));
  }

  return new FormArray(groups, []);
};
