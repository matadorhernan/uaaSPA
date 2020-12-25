import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageQuoteComponent } from './image-quote.component';

describe('ImageQuoteComponent', () => {
  let component: ImageQuoteComponent;
  let fixture: ComponentFixture<ImageQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
