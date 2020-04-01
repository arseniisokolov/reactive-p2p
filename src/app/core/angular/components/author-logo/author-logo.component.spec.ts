import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorLogoComponent } from './author-logo.component';

describe('AuthorLogoComponent', () => {
  let component: AuthorLogoComponent;
  let fixture: ComponentFixture<AuthorLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
