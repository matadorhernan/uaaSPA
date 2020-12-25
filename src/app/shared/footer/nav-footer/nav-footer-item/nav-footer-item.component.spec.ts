import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFooterItemComponent } from './nav-footer-item.component';

describe('NavFooterItemComponent', () => {
  let component: NavFooterItemComponent;
  let fixture: ComponentFixture<NavFooterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavFooterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFooterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
