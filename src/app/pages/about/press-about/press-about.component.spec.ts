import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressAboutComponent } from './press-about.component';

describe('PressAboutComponent', () => {
  let component: PressAboutComponent;
  let fixture: ComponentFixture<PressAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
