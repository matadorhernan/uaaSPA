import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityDevelopmentComponent } from './university-development.component';

describe('UniversityDevelopmentComponent', () => {
  let component: UniversityDevelopmentComponent;
  let fixture: ComponentFixture<UniversityDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
