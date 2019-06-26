import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillAtivosComponent } from './drill-ativos.component';

describe('DrillAtivosComponent', () => {
  let component: DrillAtivosComponent;
  let fixture: ComponentFixture<DrillAtivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillAtivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillAtivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
