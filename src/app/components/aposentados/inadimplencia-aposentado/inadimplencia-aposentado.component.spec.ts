import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InadimplenciaAposentadoComponent } from './inadimplencia-aposentado.component';

describe('InadimplenciaAposentadoComponent', () => {
  let component: InadimplenciaAposentadoComponent;
  let fixture: ComponentFixture<InadimplenciaAposentadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InadimplenciaAposentadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InadimplenciaAposentadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
