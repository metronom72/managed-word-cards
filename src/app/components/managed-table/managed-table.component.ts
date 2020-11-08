import {Component, Input, OnInit} from '@angular/core';
import { Word } from 'src/app/core/word';

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
    console.log(id, this.words);
    this.words = this.words.filter((word) => word.id !== id);
  }
}
