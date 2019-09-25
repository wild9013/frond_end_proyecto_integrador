import { TestBed } from '@angular/core/testing';

import { TproduccionService } from './tproduccion.service';

describe('TproduccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TproduccionService = TestBed.get(TproduccionService);
    expect(service).toBeTruthy();
  });
});
