import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletosAbertosComponent } from './boletos-abertos.component';

describe('BoletosAbertosComponent', () => {
  let component: BoletosAbertosComponent;
  let fixture: ComponentFixture<BoletosAbertosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletosAbertosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletosAbertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
