import { Injectable } from '@angular/core';
import words from '../data/words.json';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  constructor() { }

  public lessons: [] = words;
}
