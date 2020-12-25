import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssosiationsAboutComponent } from './assosiations-about.component';

describe('AssosiationsAboutComponent', () => {
  let component: AssosiationsAboutComponent;
  let fixture: ComponentFixture<AssosiationsAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssosiationsAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssosiationsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
