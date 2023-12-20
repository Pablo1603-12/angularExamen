import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEntrevistaComponent } from './listar-entrevista.component';

describe('ListarEntrevistaComponent', () => {
  let component: ListarEntrevistaComponent;
  let fixture: ComponentFixture<ListarEntrevistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEntrevistaComponent]
    });
    fixture = TestBed.createComponent(ListarEntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
