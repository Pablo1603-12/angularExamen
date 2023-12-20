import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPuestoTrabajoComponent } from './formulario-puesto-trabajo.component';

describe('FormularioPuestoTrabajoComponent', () => {
  let component: FormularioPuestoTrabajoComponent;
  let fixture: ComponentFixture<FormularioPuestoTrabajoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioPuestoTrabajoComponent]
    });
    fixture = TestBed.createComponent(FormularioPuestoTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
