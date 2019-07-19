import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensalidadeAfastadosComponent } from './mensalidade-afastados.component';

describe('MensalidadeAfastadosComponent', () => {
  let component: MensalidadeAfastadosComponent;
  let fixture: ComponentFixture<MensalidadeAfastadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensalidadeAfastadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensalidadeAfastadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
