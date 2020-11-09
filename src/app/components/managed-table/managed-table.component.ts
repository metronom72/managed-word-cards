import {Component, Input, OnInit} from '@angular/core';
import { Word } from '../../core/word';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-managed-table',
  templateUrl: './managed-table.component.html',
  styleUrls: ['./managed-table.component.scss']
})
export class ManagedTableComponent implements OnInit {
  @Input() words: Word[] = [];

  constructor() { }

  ngOnInit(): void { }

  removeWord = (id: string) => {
    this.words = this.words.filter((word) => word.id !== id);
  }

  addWord = () => {
    this.words.push({
      original: '',
      target: '',
      id: uuid(),
      index: this.words.length,
    });
  }
}
