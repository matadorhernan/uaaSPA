import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityAcademicModelComponent } from './university-academic-model.component';

describe('UniversityAcademicModelComponent', () => {
  let component: UniversityAcademicModelComponent;
  let fixture: ComponentFixture<UniversityAcademicModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityAcademicModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityAcademicModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
