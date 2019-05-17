import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamWorkComponent } from './dream-work.component';

describe('DreamWorkComponent', () => {
  let component: DreamWorkComponent;
  let fixture: ComponentFixture<DreamWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
