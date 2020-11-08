import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedTableComponent } from './managed-table.component';

describe('ManagedTableComponent', () => {
  let component: ManagedTableComponent;
  let fixture: ComponentFixture<ManagedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagedTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
