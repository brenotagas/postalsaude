import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelamentoAfastadosComponent } from './parcelamento-afastados.component';

describe('ParcelamentoAfastadosComponent', () => {
  let component: ParcelamentoAfastadosComponent;
  let fixture: ComponentFixture<ParcelamentoAfastadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelamentoAfastadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelamentoAfastadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
