import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensalidadeAtivosComponent } from './mensalidade-ativos.component';

describe('MensalidadeAtivosComponent', () => {
  let component: MensalidadeAtivosComponent;
  let fixture: ComponentFixture<MensalidadeAtivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensalidadeAtivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensalidadeAtivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
