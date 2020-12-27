import {Word} from './word';
import {AbstractControl, ValidatorFn} from '@angular/forms';

export interface Group {
  words: Word[];
  title?: string;
  id?: string;
}
