import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomationReferComponent } from './infomation-refer.component';

describe('InfomationReferComponent', () => {
  let component: InfomationReferComponent;
  let fixture: ComponentFixture<InfomationReferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfomationReferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomationReferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
