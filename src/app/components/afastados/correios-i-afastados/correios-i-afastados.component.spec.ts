import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreiosIAfastadosComponent } from './correios-i-afastados.component';

describe('CorreiosIAfastadosComponent', () => {
  let component: CorreiosIAfastadosComponent;
  let fixture: ComponentFixture<CorreiosIAfastadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorreiosIAfastadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreiosIAfastadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
