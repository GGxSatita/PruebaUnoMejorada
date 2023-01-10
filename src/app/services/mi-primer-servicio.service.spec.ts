import { TestBed } from '@angular/core/testing';

import { MiPrimerServicioService } from './mi-primer-servicio.service';

describe('MiPrimerServicioService', () => {
  let service: MiPrimerServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiPrimerServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
