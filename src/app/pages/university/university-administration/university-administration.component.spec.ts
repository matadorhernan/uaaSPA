import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityAdministrationComponent } from './university-administration.component';

describe('UniversityAdministrationComponent', () => {
  let component: UniversityAdministrationComponent;
  let fixture: ComponentFixture<UniversityAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
