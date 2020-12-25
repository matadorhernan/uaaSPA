import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleHeadComponent } from './title-head.component';

describe('TitleHeadComponent', () => {
  let component: TitleHeadComponent;
  let fixture: ComponentFixture<TitleHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
