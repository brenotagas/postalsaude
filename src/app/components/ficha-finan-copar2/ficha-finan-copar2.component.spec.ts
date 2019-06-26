import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaFinanCopar2Component } from './ficha-finan-copar2.component';

describe('FichaFinanCopar2Component', () => {
  let component: FichaFinanCopar2Component;
  let fixture: ComponentFixture<FichaFinanCopar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaFinanCopar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaFinanCopar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
