import { SemiMonthlyMortgageCalculator } from './semi-monthly-mortgage-calculator';
import { PaymentFrequency } from './models/payment-frequency';
import { PaymentParams } from './models/payment-params';

describe('SemiMonthlyMortgageCalculator', () => {
  const mockPaymentParams = {
    mortgageAmount: 100000,
    interestRate: 0.05,
    amortizationPeriodYear: 25,
    amortizationPeriodMonth: 0,
    paymentFrequency: PaymentFrequency.Monthly,
    term: 5,
  } as PaymentParams;

  it('should create an instance', () => {
    expect(new SemiMonthlyMortgageCalculator(mockPaymentParams)).toBeTruthy();
  });
});
