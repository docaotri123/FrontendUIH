import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelJobComponent } from './panel-job.component';

describe('PanelJobComponent', () => {
  let component: PanelJobComponent;
  let fixture: ComponentFixture<PanelJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
