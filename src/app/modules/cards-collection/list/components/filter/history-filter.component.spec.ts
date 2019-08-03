import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryFilterComponent } from './my-cards-list-filter.component';

describe('HistoryFilterComponent', () => {
  let component: HistoryFilterComponent;
  let fixture: ComponentFixture<HistoryFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
