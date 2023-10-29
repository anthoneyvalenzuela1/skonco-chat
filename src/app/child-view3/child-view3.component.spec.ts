import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildView3Component } from './child-view3.component';

describe('ChildView3Component', () => {
  let component: ChildView3Component;
  let fixture: ComponentFixture<ChildView3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildView3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildView3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
