import { AbstractMortgageCalculator } from "./abstract-mortgage-calculator";
import { MortgageCalculator } from "./mortgage-calculator";
import { PaymentParams } from "./models/payment-params";

export class SemiMonthlyMortgageCalculator extends AbstractMortgageCalculator implements MortgageCalculator{
  constructor(paymentParams: PaymentParams) {
    super(paymentParams);
  }

  get mortgagePayment(): number {
    let p = Math.pow(1 + this.periodRate, this.numberOfPayments);
    return this.paymentParams.mortgageAmount * this.periodRate * p / (p - 1);
  }

  get numberOfPayments(): number {
    return this.amortizationPeriod * 2;
  }

  get numberOfPaymentsInTerm(): number {
    return this.paymentParams.term * 24;
  }

  get periodRate(): number {
    return this.paymentParams.interestRate / 24;
  }
}
