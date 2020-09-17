import { TestBed } from '@angular/core/testing';

import { PartlistService } from './partlist.service';

describe('PartlistService', () => {
  let service: PartlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
