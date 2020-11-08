import { Component, OnInit } from '@angular/core';
import words from '../../data/words.json';

@Component({
  selector: 'app-managed-table',
  templateUrl: './managed-table.component.html',
  styleUrls: ['./managed-table.component.scss']
})
export class ManagedTableComponent implements OnInit {

  words = words.slice(0, 10);

  constructor() { }

  ngOnInit(): void { }

}
