import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelamentoAposentadosComponent } from './parcelamento-aposentados.component';

describe('ParcelamentoAposentadosComponent', () => {
  let component: ParcelamentoAposentadosComponent;
  let fixture: ComponentFixture<ParcelamentoAposentadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelamentoAposentadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelamentoAposentadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
