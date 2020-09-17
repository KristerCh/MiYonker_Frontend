import { TestBed } from '@angular/core/testing';

import { PartsVehicleService } from './parts-vehicle.service';

describe('PartsVehicleService', () => {
  let service: PartsVehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartsVehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
