import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityInstitutionComponent } from './university-institution.component';

describe('UniversityInstitutionComponent', () => {
  let component: UniversityInstitutionComponent;
  let fixture: ComponentFixture<UniversityInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
