import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislationAboutComponent } from './legislation-about.component';

describe('LegislationAboutComponent', () => {
  let component: LegislationAboutComponent;
  let fixture: ComponentFixture<LegislationAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegislationAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislationAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
