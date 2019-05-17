import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangugaeCandidateComponent } from './langugae-candidate.component';

describe('LangugaeCandidateComponent', () => {
  let component: LangugaeCandidateComponent;
  let fixture: ComponentFixture<LangugaeCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangugaeCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangugaeCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
