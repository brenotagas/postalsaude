import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreiosIiAfastadosComponent } from './correios-ii-afastados.component';

describe('CorreiosIiAfastadosComponent', () => {
  let component: CorreiosIiAfastadosComponent;
  let fixture: ComponentFixture<CorreiosIiAfastadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorreiosIiAfastadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreiosIiAfastadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
