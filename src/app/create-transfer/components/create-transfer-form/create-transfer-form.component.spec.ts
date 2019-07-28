import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransferFormComponent } from './create-transfer-form.component';

describe('CreateTransferFormComponent', () => {
  let component: CreateTransferFormComponent;
  let fixture: ComponentFixture<CreateTransferFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTransferFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTransferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
