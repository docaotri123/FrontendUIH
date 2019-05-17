import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyWorkComponent } from './notify-work.component';

describe('NotifyWorkComponent', () => {
  let component: NotifyWorkComponent;
  let fixture: ComponentFixture<NotifyWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
