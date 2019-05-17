import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionJobComponent } from './description-job.component';

describe('DescriptionJobComponent', () => {
  let component: DescriptionJobComponent;
  let fixture: ComponentFixture<DescriptionJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
