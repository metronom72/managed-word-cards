import { Injectable } from '@angular/core';
import {Lesson} from '../core/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  public constructor() { }

  public lessons: Lesson[] = [];
}
