import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCandidateComponent } from './education-candidate.component';

describe('EducationCandidateComponent', () => {
  let component: EducationCandidateComponent;
  let fixture: ComponentFixture<EducationCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
