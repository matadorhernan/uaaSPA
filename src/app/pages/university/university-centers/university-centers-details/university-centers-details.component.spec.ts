import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityCentersDetailsComponent } from './university-centers-details.component';

describe('UniversityCentersDetailsComponent', () => {
  let component: UniversityCentersDetailsComponent;
  let fixture: ComponentFixture<UniversityCentersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityCentersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityCentersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
