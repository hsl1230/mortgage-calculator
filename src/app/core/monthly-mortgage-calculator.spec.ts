import { MonthlyMortgageCalculator } from './monthly-mortgage-calculator';
import { PaymentFrequency } from './models/payment-frequency';
import { PaymentParams } from './models/payment-params';

describe('MonthlyMortgageCalculator', () => {
  const mockPaymentParams = {
    mortgageAmount: 100000,
    interestRate: 0.05,
    amortizationPeriodYear: 25,
    amortizationPeriodMonth: 0,
    paymentFrequency: PaymentFrequency.Monthly,
    term: 5,
  } as PaymentParams;

  it('should create an instance', () => {
    expect(new MonthlyMortgageCalculator(mockPaymentParams)).toBeTruthy();
  });

  it('should calculate monthly payment correctly', () => {
    const cal = new MonthlyMortgageCalculator(mockPaymentParams);
    expect(cal.numberOfPaymentsInTerm).toEqual(60);
    expect(cal.numberOfPayments).toEqual(300);
    expect(cal.mortgagePayment.toFixed(2)).toEqual('584.59');
  });
});
