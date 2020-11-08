import { Component, OnInit } from '@angular/core';
import { parse } from 'papaparse';
import {generateLessons} from '../../core/lesson-utils';
import {Lesson} from '../../core/lesson';

@Component({
  selector: 'app-manage-lessons',
  templateUrl: './manage-lessons.component.html',
  styleUrls: ['./manage-lessons.component.scss']
})
export class ManageLessonsComponent implements OnInit {
  public groups: Lesson[] = [];
  onSelect = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const rows = parse(event.target.result, {
        header: true
      });
      this.groups = generateLessons(rows.data, 20);
    };
    reader.readAsText(file);
  }

  onRemove = (event) => {
    this.groups = [];
  }

  constructor() { }

  ngOnInit(): void { }
}
