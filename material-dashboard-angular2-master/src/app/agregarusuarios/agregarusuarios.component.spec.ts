import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarusuariosComponent } from './agregarusuarios.component';

describe('UserProfileComponentu', () => {
  let component: AgregarusuariosComponent;
  let fixture: ComponentFixture<AgregarusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
