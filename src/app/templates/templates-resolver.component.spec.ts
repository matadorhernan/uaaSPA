import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesResolverComponent } from './templates-resolver.component';

describe('TemplatesResolverComponent', () => {
  let component: TemplatesResolverComponent;
  let fixture: ComponentFixture<TemplatesResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesResolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
