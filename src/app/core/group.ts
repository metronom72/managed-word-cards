import {Word} from './word';
import {AbstractControl, ValidatorFn} from '@angular/forms';

export interface Group {
  words: Word[];
  title?: string;
  id?: string;
}

export const groupValidator = (): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: any} | null => {
    console.log(control);
    // const forbidden = nameRe.test(control.value);
    // return forbidden ? {forbiddenName: {value: control.value}} : null;
    return null;
  };
};
