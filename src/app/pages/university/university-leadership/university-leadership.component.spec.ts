import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityLeadershipComponent } from './university-leadership.component';

describe('UniversityLeadershipComponent', () => {
  let component: UniversityLeadershipComponent;
  let fixture: ComponentFixture<UniversityLeadershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityLeadershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
