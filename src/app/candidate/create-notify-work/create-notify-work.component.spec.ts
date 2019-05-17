import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNotifyWorkComponent } from './create-notify-work.component';

describe('CreateNotifyWorkComponent', () => {
  let component: CreateNotifyWorkComponent;
  let fixture: ComponentFixture<CreateNotifyWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNotifyWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNotifyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
