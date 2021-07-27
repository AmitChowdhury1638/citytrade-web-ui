import { TestBed } from '@angular/core/testing';

import { VendorFilterService } from './vendor-filter.service';

describe('VendorFilterService', () => {
  let service: VendorFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
