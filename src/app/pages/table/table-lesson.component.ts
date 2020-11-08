import { Component, OnInit } from '@angular/core';
import words from '../../data/words.json';

@Component({
  selector: 'app-table-lesson',
  templateUrl: './table-lesson.component.html',
  styleUrls: ['./table-lesson.component.scss']
})
export class TableLessonComponent implements OnInit {

  words = words;

  constructor() { }

  ngOnInit(): void { }
}
