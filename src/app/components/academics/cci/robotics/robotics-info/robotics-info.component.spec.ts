import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticsInfoComponent } from './robotics-info.component';

describe('RoboticsInfoComponent', () => {
  let component: RoboticsInfoComponent;
  let fixture: ComponentFixture<RoboticsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboticsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboticsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
