import { Component, OnInit } from '@angular/core';
import words from '../../data/words.json';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  words = words;

  constructor() { }

  ngOnInit(): void { }
}
