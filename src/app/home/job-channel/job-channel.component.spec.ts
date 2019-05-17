import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobChannelComponent } from './job-channel.component';

describe('JobChannelComponent', () => {
  let component: JobChannelComponent;
  let fixture: ComponentFixture<JobChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
