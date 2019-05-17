import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApplyworkComponent } from './list-applywork.component';

describe('ListApplyworkComponent', () => {
  let component: ListApplyworkComponent;
  let fixture: ComponentFixture<ListApplyworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListApplyworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListApplyworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
