import { AbstractMortgageCalculator } from './abstract-mortgage-calculator';
import { MortgageCalculator } from './mortgage-calculator';
import { PaymentParams } from "./models/payment-params";
export class MonthlyMortgageCalculator extends AbstractMortgageCalculator implements MortgageCalculator{
  constructor(paymentParams: PaymentParams) {
    super(paymentParams);
  }

  get mortgagePayment(): number {
    return this.monthlyPayment;
  }

  get numberOfPayments(): number {
    return this.amortizationPeriod;
  }

  get numberOfPaymentsInTerm(): number {
    return this.paymentParams.term * 12;
  }

  get periodRate(): number {
    return this.paymentParams.interestRate / 12;
  }
}
