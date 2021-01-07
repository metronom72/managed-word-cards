import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pagination} from '../../core/pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() public pagination: Pagination;

  @Input() public setPage: (page: number) => void;

  public onSetPage = (current: number) => {
    this.setPage(current);
    return false;
  };

  public constructor() { }

  public ngOnInit(): void { }

}
