import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaFinanCopar1Component } from './ficha-finan-copar1.component';

describe('FichaFinanCopar1Component', () => {
  let component: FichaFinanCopar1Component;
  let fixture: ComponentFixture<FichaFinanCopar1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaFinanCopar1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaFinanCopar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
