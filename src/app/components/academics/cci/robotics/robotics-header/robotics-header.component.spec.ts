import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticsHeaderComponent } from './robotics-header.component';

describe('RoboticsHeaderComponent', () => {
  let component: RoboticsHeaderComponent;
  let fixture: ComponentFixture<RoboticsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboticsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboticsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
