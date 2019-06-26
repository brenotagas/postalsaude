import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreiosIAtivosComponent } from './correios-i-ativos.component';

describe('CorreiosIAtivosComponent', () => {
  let component: CorreiosIAtivosComponent;
  let fixture: ComponentFixture<CorreiosIAtivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorreiosIAtivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreiosIAtivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
