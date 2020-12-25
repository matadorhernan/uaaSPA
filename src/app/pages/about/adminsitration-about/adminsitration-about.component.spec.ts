import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsitrationAboutComponent } from './adminsitration-about.component';

describe('AdminsitrationAboutComponent', () => {
  let component: AdminsitrationAboutComponent;
  let fixture: ComponentFixture<AdminsitrationAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsitrationAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsitrationAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
