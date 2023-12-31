import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCandidatoComponent } from './listar-candidato.component';

describe('ListarCandidatoComponent', () => {
  let component: ListarCandidatoComponent;
  let fixture: ComponentFixture<ListarCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCandidatoComponent]
    });
    fixture = TestBed.createComponent(ListarCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
