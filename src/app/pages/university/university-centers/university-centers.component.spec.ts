import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityCentersComponent } from './university-centers.component';

describe('UniversityCentersComponent', () => {
  let component: UniversityCentersComponent;
  let fixture: ComponentFixture<UniversityCentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityCentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
