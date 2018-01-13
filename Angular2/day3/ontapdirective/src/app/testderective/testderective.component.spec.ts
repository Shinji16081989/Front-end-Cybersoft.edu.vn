import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestderectiveComponent } from './testderective.component';

describe('TestderectiveComponent', () => {
  let component: TestderectiveComponent;
  let fixture: ComponentFixture<TestderectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestderectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestderectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
