import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCandidateComponent } from './account-candidate.component';

describe('AccountCandidateComponent', () => {
  let component: AccountCandidateComponent;
  let fixture: ComponentFixture<AccountCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
