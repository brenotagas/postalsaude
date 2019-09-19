import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletosAbertosAfastadosComponent } from './boletos-abertos-afastados.component';

describe('BoletosAbertosComponent', () => {
  let component: BoletosAbertosAfastadosComponent;
  let fixture: ComponentFixture<BoletosAbertosAfastadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletosAbertosAfastadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletosAbertosAfastadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
