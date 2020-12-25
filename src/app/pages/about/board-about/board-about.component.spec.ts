import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAboutComponent } from './board-about.component';

describe('BoardAboutComponent', () => {
  let component: BoardAboutComponent;
  let fixture: ComponentFixture<BoardAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
