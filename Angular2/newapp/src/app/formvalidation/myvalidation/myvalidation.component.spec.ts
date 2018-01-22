import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyvalidationComponent } from './myvalidation.component';

describe('MyvalidationComponent', () => {
  let component: MyvalidationComponent;
  let fixture: ComponentFixture<MyvalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyvalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
