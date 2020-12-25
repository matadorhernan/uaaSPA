import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalModelAboutComponent } from './educational-model-about.component';

describe('EducationalModelAboutComponent', () => {
  let component: EducationalModelAboutComponent;
  let fixture: ComponentFixture<EducationalModelAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationalModelAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalModelAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
