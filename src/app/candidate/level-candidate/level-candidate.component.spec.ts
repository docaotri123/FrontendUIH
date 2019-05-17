import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelCandidateComponent } from './level-candidate.component';

describe('LevelCandidateComponent', () => {
  let component: LevelCandidateComponent;
  let fixture: ComponentFixture<LevelCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
