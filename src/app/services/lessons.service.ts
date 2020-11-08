import { Injectable } from '@angular/core';
import {Lesson} from '../core/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  constructor() { }

  public lessons: Lesson[] = [];
}
