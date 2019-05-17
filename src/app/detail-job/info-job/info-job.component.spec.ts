import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoJobComponent } from './info-job.component';

describe('InfoJobComponent', () => {
  let component: InfoJobComponent;
  let fixture: ComponentFixture<InfoJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
