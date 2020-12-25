import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulshipAboutComponent } from './consulship-about.component';

describe('ConsulshipAboutComponent', () => {
  let component: ConsulshipAboutComponent;
  let fixture: ComponentFixture<ConsulshipAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulshipAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulshipAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
