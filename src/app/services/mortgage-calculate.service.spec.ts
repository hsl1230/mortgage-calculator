import { TestBed } from '@angular/core/testing';

import { MortgageCalculateService } from './mortgage-calculate.service';

describe('MortgageCalculateService', () => {
  let service: MortgageCalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortgageCalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
