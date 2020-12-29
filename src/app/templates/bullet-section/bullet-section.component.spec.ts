import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletSectionComponent } from './bullet-section.component';

describe('BulletSectionComponent', () => {
  let component: BulletSectionComponent;
  let fixture: ComponentFixture<BulletSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
