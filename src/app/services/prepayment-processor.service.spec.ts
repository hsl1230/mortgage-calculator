import { TestBed } from '@angular/core/testing';

import { PrepaymentProcessorService } from './prepayment-processor.service';

describe('PrepaymentProcessorService', () => {
  let service: PrepaymentProcessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrepaymentProcessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
