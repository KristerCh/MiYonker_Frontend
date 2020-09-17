import { TestBed } from '@angular/core/testing';

import { PartlistDetailsService } from './partlist-details.service';

describe('PartlistDetailsService', () => {
  let service: PartlistDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartlistDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
