import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretariatAboutComponent } from './secretariat-about.component';

describe('SecretariatAboutComponent', () => {
  let component: SecretariatAboutComponent;
  let fixture: ComponentFixture<SecretariatAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretariatAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretariatAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
