import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditingComponent } from './accrediting.component';

describe('AccreditingComponent', () => {
  let component: AccreditingComponent;
  let fixture: ComponentFixture<AccreditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccreditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
