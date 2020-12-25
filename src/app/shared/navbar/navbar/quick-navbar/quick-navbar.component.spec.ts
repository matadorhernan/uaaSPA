import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickNavbarComponent } from './quick-navbar.component';

describe('QuickNavbarComponent', () => {
  let component: QuickNavbarComponent;
  let fixture: ComponentFixture<QuickNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
