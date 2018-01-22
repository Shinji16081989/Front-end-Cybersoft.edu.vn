import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AinputComponent } from './ainput.component';

describe('AinputComponent', () => {
  let component: AinputComponent;
  let fixture: ComponentFixture<AinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
