import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomationAddComponent } from './infomation-add.component';

describe('InfomationAddComponent', () => {
  let component: InfomationAddComponent;
  let fixture: ComponentFixture<InfomationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfomationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
