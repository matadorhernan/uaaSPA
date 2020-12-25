import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentersAboutComponent } from './centers-about.component';

describe('CentersAboutComponent', () => {
  let component: CentersAboutComponent;
  let fixture: ComponentFixture<CentersAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentersAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentersAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
