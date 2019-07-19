import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensalidadeAposentadoComponent } from './mensalidade-aposentado.component';

describe('MensalidadeAposentadoComponent', () => {
  let component: MensalidadeAposentadoComponent;
  let fixture: ComponentFixture<MensalidadeAposentadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensalidadeAposentadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensalidadeAposentadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
