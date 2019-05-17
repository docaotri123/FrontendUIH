import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSaveworkComponent } from './list-savework.component';

describe('ListSaveworkComponent', () => {
  let component: ListSaveworkComponent;
  let fixture: ComponentFixture<ListSaveworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSaveworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSaveworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
