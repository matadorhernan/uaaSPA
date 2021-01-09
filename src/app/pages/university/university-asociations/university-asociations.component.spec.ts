import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityAsociationsComponent } from './university-asociations.component';

describe('UniversityAsociationsComponent', () => {
  let component: UniversityAsociationsComponent;
  let fixture: ComponentFixture<UniversityAsociationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityAsociationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityAsociationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
