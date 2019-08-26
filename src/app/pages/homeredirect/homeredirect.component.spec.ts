import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeredirectComponent } from './homeredirect.component';

describe('HomeredirectComponent', () => {
  let component: HomeredirectComponent;
  let fixture: ComponentFixture<HomeredirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeredirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeredirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
