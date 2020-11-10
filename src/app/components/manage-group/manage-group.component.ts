import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Group} from '../../core/group';

@Component({
  selector: 'app-manage-group',
  templateUrl: './manage-group.component.html',
  styleUrls: ['./manage-group.component.scss']
})
export class ManageGroupComponent implements OnInit {
  @Input() group: Group = null;

  constructor() { }

  ngOnInit(): void { }
}
