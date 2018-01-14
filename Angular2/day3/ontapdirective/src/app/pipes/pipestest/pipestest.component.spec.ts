import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipestestComponent } from './pipestest.component';

describe('PipestestComponent', () => {
  let component: PipestestComponent;
  let fixture: ComponentFixture<PipestestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipestestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipestestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
