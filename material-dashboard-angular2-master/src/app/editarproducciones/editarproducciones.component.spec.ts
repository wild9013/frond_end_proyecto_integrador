import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarproduccionesComponent } from './editarproducciones.component';

describe('EditarproduccionesComponent', () => {
  let component: EditarproduccionesComponent;
  let fixture: ComponentFixture<EditarproduccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarproduccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarproduccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
