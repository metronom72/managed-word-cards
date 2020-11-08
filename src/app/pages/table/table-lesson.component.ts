import { Component, OnInit } from '@angular/core';
import words from '../../data/words.json';
import {Group} from '../../core/group';

@Component({
  selector: 'app-table-lesson',
  templateUrl: './table-lesson.component.html',
  styleUrls: ['./table-lesson.component.scss']
})
export class TableLessonComponent implements OnInit {

  words: Group = null;

  constructor() { }

  ngOnInit(): void { }
}
