import { TestBed } from '@angular/core/testing';

import { MortgageCalculatorFactoryService } from './mortgage-calculator-factory.service';

describe('MortgageCalculatorFactoryService', () => {
  let service: MortgageCalculatorFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortgageCalculatorFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
