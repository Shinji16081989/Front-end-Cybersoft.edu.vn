import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Derective1Component } from './derective1.component';

describe('Derective1Component', () => {
  let component: Derective1Component;
  let fixture: ComponentFixture<Derective1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Derective1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Derective1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
