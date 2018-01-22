import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinputComponent } from './binput.component';

describe('BinputComponent', () => {
  let component: BinputComponent;
  let fixture: ComponentFixture<BinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
