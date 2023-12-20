import { TestBed } from '@angular/core/testing';

import { PuestoTrabajoService } from './puesto-trabajo.service';

describe('PuestoTrabajoService', () => {
  let service: PuestoTrabajoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuestoTrabajoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
