import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipAboutComponent } from './leadership-about.component';

describe('LeadershipAboutComponent', () => {
  let component: LeadershipAboutComponent;
  let fixture: ComponentFixture<LeadershipAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
