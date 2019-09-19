import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InadimplenciaAfastadoComponent } from './inadimplencia-afastado.component';

describe('InadimplenciaAfastadoComponent', () => {
  let component: InadimplenciaAfastadoComponent;
  let fixture: ComponentFixture<InadimplenciaAfastadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InadimplenciaAfastadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InadimplenciaAfastadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
