import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNotifyworkComponent } from './list-notifywork.component';

describe('ListNotifyworkComponent', () => {
  let component: ListNotifyworkComponent;
  let fixture: ComponentFixture<ListNotifyworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNotifyworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNotifyworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
