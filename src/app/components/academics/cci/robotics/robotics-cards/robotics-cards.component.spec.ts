import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticsCardsComponent } from './robotics-cards.component';

describe('RoboticsCardsComponent', () => {
  let component: RoboticsCardsComponent;
  let fixture: ComponentFixture<RoboticsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboticsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboticsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
