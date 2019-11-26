import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticsReadyComponent } from './robotics-ready.component';

describe('RoboticsReadyComponent', () => {
  let component: RoboticsReadyComponent;
  let fixture: ComponentFixture<RoboticsReadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboticsReadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboticsReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
