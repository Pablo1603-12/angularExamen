import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPuestoTrabajoComponent } from './listar-puesto-trabajo.component';

describe('ListarPuestoTrabajoComponent', () => {
  let component: ListarPuestoTrabajoComponent;
  let fixture: ComponentFixture<ListarPuestoTrabajoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPuestoTrabajoComponent]
    });
    fixture = TestBed.createComponent(ListarPuestoTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
