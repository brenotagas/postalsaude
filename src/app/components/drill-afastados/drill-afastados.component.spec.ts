import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillAfastadosComponent } from './drill-afastados.component';

describe('DrillAfastadosComponent', () => {
  let component: DrillAfastadosComponent;
  let fixture: ComponentFixture<DrillAfastadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillAfastadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillAfastadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
