import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletosAbertosAposentadosComponent } from './boletos-abertos-aposentados.component';

describe('BoletosAbertosComponent', () => {
  let component: BoletosAbertosAposentadosComponent;
  let fixture: ComponentFixture<BoletosAbertosAposentadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletosAbertosAposentadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletosAbertosAposentadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
