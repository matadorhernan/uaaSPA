import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrosoftFooterComponent } from './cuadrosoft-footer.component';

describe('CuadrosoftFooterComponent', () => {
  let component: CuadrosoftFooterComponent;
  let fixture: ComponentFixture<CuadrosoftFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadrosoftFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrosoftFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
