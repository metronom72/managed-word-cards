import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public lessons = new Array(10).fill(null).map(() => ({
    id: uuid(),
    title: 'Название урока',
  }));

  public expanded = [];

  constructor() { }

  ngOnInit(): void { }
}
