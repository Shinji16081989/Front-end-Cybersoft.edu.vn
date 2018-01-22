import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhengoiComponent } from './ghengoi.component';

describe('GhengoiComponent', () => {
  let component: GhengoiComponent;
  let fixture: ComponentFixture<GhengoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhengoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhengoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
