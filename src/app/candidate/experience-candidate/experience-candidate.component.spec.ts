import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCandidateComponent } from './experience-candidate.component';

describe('ExperienceCandidateComponent', () => {
  let component: ExperienceCandidateComponent;
  let fixture: ComponentFixture<ExperienceCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
