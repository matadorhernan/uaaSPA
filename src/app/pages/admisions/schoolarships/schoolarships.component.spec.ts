import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolarshipsComponent } from './schoolarships.component';

describe('SchoolarshipsComponent', () => {
  let component: SchoolarshipsComponent;
  let fixture: ComponentFixture<SchoolarshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolarshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
