import { Component, OnInit } from '@angular/core';
import { parse } from 'papaparse';
import {generateGroups} from '../../core/lesson-utils';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-manage-lessons',
  templateUrl: './manage-lessons.component.html',
  styleUrls: ['./manage-lessons.component.scss']
})
export class ManageLessonsComponent implements OnInit {
  public expanded: number|null = null;

  public lesson = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    originalLanguage: new FormControl('Russian', [
      Validators.required,
    ]),
    targetLanguage: new FormControl('', [
      Validators.required
    ]),
    groups: new FormControl([], [
      Validators.required
    ])
  });

  // public lesson: Lesson = {
  //   title: '',
  //   originalLanguage: '',
  //   targetLanguage: '',
  //   groups: [],
  // };

  public onExpand = (index: number) => {
    console.log(index);
    if (this.expanded === index) {
      this.expanded = null;
    } else {
      this.expanded = index;
    }
  }

  public onSelect = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const start = Date.now();
      const rows = parse(event.target.result, {
        header: true
      }).data;
      this.lesson.get('groups').setValue(generateGroups(rows, 10));
      this.expanded = 0;
    };
    reader.readAsText(file);
  }

  public onRemove = (event) => {
    this.lesson.get('groups').setValue([]);
    this.expanded = 0;
  }

  get title(): AbstractControl {
    return this.lesson.get('title');
  }

  get originalLanguage(): AbstractControl {
    return this.lesson.get('originalLanguage');
  }

  get targetLanguage(): AbstractControl {
    return this.lesson.get('targetLanguage');
  }

  get groups(): AbstractControl {
    return this.lesson.get('groups');
  }

  constructor() { }

  ngOnInit(): void { }
}
