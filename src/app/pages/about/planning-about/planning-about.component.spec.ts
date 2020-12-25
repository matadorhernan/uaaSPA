import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningAboutComponent } from './planning-about.component';

describe('PlanningAboutComponent', () => {
  let component: PlanningAboutComponent;
  let fixture: ComponentFixture<PlanningAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
