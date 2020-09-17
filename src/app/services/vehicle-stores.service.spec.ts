import { TestBed } from '@angular/core/testing';

import { VehicleStoresService } from './vehicle-stores.service';

describe('VehicleStoresService', () => {
  let service: VehicleStoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleStoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
