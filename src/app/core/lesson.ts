import {Group} from './group';

export interface Lesson {
  title: string;
  groups: Group[];
  targetLanguage: string;
  originalLanguage: string;
  id?: string;
}
