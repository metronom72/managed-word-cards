import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pagination} from '../../core/pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pagination: Pagination;

  @Input() setPage: (page: number) => void;

  onSetPage = (current: number) => {
    this.setPage(current);
    return false;
  }

  constructor() { }

  ngOnInit(): void { }

}
