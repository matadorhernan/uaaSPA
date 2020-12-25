import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SealsFooterComponent } from './seals-footer.component';

describe('SealsFooterComponent', () => {
  let component: SealsFooterComponent;
  let fixture: ComponentFixture<SealsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SealsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SealsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
