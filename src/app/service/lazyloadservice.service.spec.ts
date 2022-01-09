import { TestBed } from '@angular/core/testing';

import { LazyloadserviceService } from './lazyloadservice.service';

describe('LazyloadserviceService', () => {
  let service: LazyloadserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyloadserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
