import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturingJumbotronComponent } from './featuring-jumbotron.component';

describe('FeaturingJumbotronComponent', () => {
  let component: FeaturingJumbotronComponent;
  let fixture: ComponentFixture<FeaturingJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturingJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturingJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
