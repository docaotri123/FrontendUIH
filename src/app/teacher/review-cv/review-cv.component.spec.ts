import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCVComponent } from './review-cv.component';

describe('ReviewCVComponent', () => {
  let component: ReviewCVComponent;
  let fixture: ComponentFixture<ReviewCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
