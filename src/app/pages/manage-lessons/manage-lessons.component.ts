import { Component, OnInit } from '@angular/core';
import { parse } from 'papaparse';
import {generateGroups} from '../../core/lesson-utils';
import {Lesson} from '../../core/lesson';
import {generatePagination, Pagination} from '../../core/pagination';
import {FormControl, FormGroup} from '@angular/forms';
import {Group} from '../../core/group';

@Component({
  selector: 'app-manage-lessons',
  templateUrl: './manage-lessons.component.html',
  styleUrls: ['./manage-lessons.component.scss']
})
export class ManageLessonsComponent implements OnInit {

  public pagination: Pagination = {
    current: 1,
    total: 1,
    last: 1,
    perPage: 4,
    canPrev: true,
    canNext: true,
    leftDots: true,
    rightDots: true,
    disabled: true,
  };

  public form: Lesson = {
    title: '',
    originalLanguage: '',
    targetLanguage: '',
    groups: [],
  };

  onSelect = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const rows = parse(event.target.result, {
        header: true
      }).data;
      this.form.groups = generateGroups(rows, 20);
      this.pagination = generatePagination(this.form.groups.length, 1, 4);
    };
    reader.readAsText(file);
  }

  onRemove = (event) => {
    this.form.groups = [];
    this.pagination = generatePagination(0, 1, 4);
  }

  onNextPage = (current: number) => {
    this.pagination = generatePagination(this.pagination.total, current, this.pagination.perPage);
    return false;
  }

  constructor() { }

  ngOnInit(): void { }
}
