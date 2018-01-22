import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlygheComponent } from './quanlyghe.component';

describe('QuanlygheComponent', () => {
  let component: QuanlygheComponent;
  let fixture: ComponentFixture<QuanlygheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlygheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlygheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
