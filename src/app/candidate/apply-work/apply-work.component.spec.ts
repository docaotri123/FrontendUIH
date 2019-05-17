import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyWorkComponent } from './apply-work.component';

describe('ApplyWorkComponent', () => {
  let component: ApplyWorkComponent;
  let fixture: ComponentFixture<ApplyWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
