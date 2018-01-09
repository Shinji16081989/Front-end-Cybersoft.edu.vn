import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Deretive2Component } from './deretive2.component';

describe('Deretive2Component', () => {
  let component: Deretive2Component;
  let fixture: ComponentFixture<Deretive2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deretive2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Deretive2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
