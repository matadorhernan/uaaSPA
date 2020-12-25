import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionAboutComponent } from './institution-about.component';

describe('InstitutionAboutComponent', () => {
  let component: InstitutionAboutComponent;
  let fixture: ComponentFixture<InstitutionAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
