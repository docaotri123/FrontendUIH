import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomationCandidateComponent } from './infomation-candidate.component';

describe('InfomationCandidateComponent', () => {
  let component: InfomationCandidateComponent;
  let fixture: ComponentFixture<InfomationCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfomationCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomationCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
