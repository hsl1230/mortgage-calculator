import { AbstractMortgageCalculator } from './abstract-mortgage-calculator';
import { PaymentFrequency } from './models/payment-frequency';
import { PaymentParams } from './models/payment-params';

class TestMortgageCalculator extends AbstractMortgageCalculator {
  get mortgagePayment(): number {
    throw new Error('Method not implemented.');
  }
  get numberOfPayments(): number {
    throw new Error('Method not implemented.');
  }
  get numberOfPaymentsInTerm(): number {
    throw new Error('Method not implemented.');
  }
  get periodRate(): number {
    throw new Error('Method not implemented.');
  }
}

describe('AbstractMortgageCalculator', () => {
  // const mockPaymentParams = {
  //   mortgageAmount: 100000,
  //   interestRate: 5,
  //   amortizationPeriodYear: 25,
  //   amortizationPeriodMonth: 0,
  //   paymentFrequency: 'Monthly',
  //   term: 5,
  //   prepaymentAmount: 0,
  //   prepaymentFrequency: 'OneTime',
  //   paymentToStartWith: 1
  // } as PaymentParams;

  const mockPaymentParams = {
    mortgageAmount: 100000,
    interestRate: 0.05,
    amortizationPeriodYear: 25,
    amortizationPeriodMonth: 0,
    paymentFrequency: PaymentFrequency.Monthly,
    term: 5,
  } as PaymentParams;

  it('should create an instance', () => {
    expect(new TestMortgageCalculator(mockPaymentParams)).toBeTruthy();
  });

  it('should get monthly payment correctly', () => {
    expect(new TestMortgageCalculator(mockPaymentParams).monthlyPayment.toFixed(2)).toEqual('584.59');
  });

  it('should get amortization period in months correctly', () => {
    expect(new TestMortgageCalculator(mockPaymentParams).amortizationPeriod).toEqual(300);
  });
});
