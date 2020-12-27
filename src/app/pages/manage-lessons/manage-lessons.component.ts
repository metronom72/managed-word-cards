import { Component, OnInit } from '@angular/core';
import { parse } from 'papaparse';
import {generateGroups, generateWord} from '../../core/lesson-utils';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-manage-lessons',
  templateUrl: './manage-lessons.component.html',
  styleUrls: ['./manage-lessons.component.scss']
})
export class ManageLessonsComponent implements OnInit {
  public expanded: number|null = null;

  public lesson = new FormGroup({
    title: new FormControl(
      '',
      [
        Validators.required,
      ]
    ),
    originalLanguage: new FormControl(
      'Russian',
      [Validators.required]
    ),
    targetLanguage: new FormControl(
      '',
      [Validators.required]
    ),
    groups: new FormArray(
      [],
      [Validators.required]
    )
  });

  public onExpand = (index: number) => {
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
      generateGroups(rows, 10).forEach(group => {
        this.groups.push(group);
      });
      this.expanded = 0;
    };
    reader.readAsText(file);
  }

  public onRemove = (event) => {
    this.lesson.get('groups').setValue([]);
    this.expanded = 0;
  }

  public removeWord = (groupIndex: number, wordIndex: number): void => {
    const group = this.groups.at(groupIndex);
    if (!group) { return; }
    const words = this.words(group);
    if (!words) { return; }
    words.removeAt(wordIndex);
  }

  public addWord = (groupIndex: number): void => {
    const group = this.groups.at(groupIndex);
    if (!group) { return; }
    const words = this.words(group);
    if (!words) { return; }
    words.push(generateWord({}, words.controls.length));
  }

  public onSubmit = () => {
    this.lesson.markAllAsTouched();
  }

  public get lessonTitle(): AbstractControl {
    return this.lesson.get('title');
  }

  public get originalLanguage(): AbstractControl {
    return this.lesson.get('originalLanguage');
  }

  public get targetLanguage(): AbstractControl {
    return this.lesson.get('targetLanguage');
  }

  public get groups(): FormArray {
    return this.lesson.get('groups') as FormArray;
  }

  public words = (group: AbstractControl): FormArray => {
    return group.get('words') as FormArray;
  }

  public hasError = (control: AbstractControl): boolean => !control.valid;

  constructor() { }

  ngOnInit(): void { }
}
