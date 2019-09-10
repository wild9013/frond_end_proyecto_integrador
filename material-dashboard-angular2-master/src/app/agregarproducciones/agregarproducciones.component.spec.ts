import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarproduccionesComponent } from './agregarproducciones.component';

describe('UserProfileComponentu', () => {
  let component: AgregarproduccionesComponent;
  let fixture: ComponentFixture<AgregarproduccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarproduccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarproduccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
