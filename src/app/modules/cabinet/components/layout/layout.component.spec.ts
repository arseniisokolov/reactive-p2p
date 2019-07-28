import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetLayoutComponent } from './cabinet-layout.component';

describe('LayoutComponent', () => {
  let component: CabinetLayoutComponent;
  let fixture: ComponentFixture<CabinetLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinetLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
