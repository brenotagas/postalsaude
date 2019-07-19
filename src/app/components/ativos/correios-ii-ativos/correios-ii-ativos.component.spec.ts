import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreiosIIAtivosComponent } from './correios-ii-ativos.component';

describe('CorreiosIIAtivosComponent', () => {
  let component: CorreiosIIAtivosComponent;
  let fixture: ComponentFixture<CorreiosIIAtivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorreiosIIAtivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreiosIIAtivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
