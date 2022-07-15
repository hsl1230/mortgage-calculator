import { AbstractMortgageCalculator } from "./abstract-mortgage-calculator";
import { MortgageCalculator } from "./mortgage-calculator";
import { PaymentParams } from "./models/payment-params";

export class BiWeeklyMortgageCalculator extends AbstractMortgageCalculator implements MortgageCalculator{
  constructor(paymentParams: PaymentParams) {
    super(paymentParams);
  }

  get mortgagePayment(): number {
    return this.monthlyPayment * 12 / 26;
  }

  get numberOfPayments(): number {
    const numberOfPayments = this.amortizationPeriod * 26 / 12 + 0.49;
    return Math.round(numberOfPayments);
  }

  get numberOfPaymentsInTerm(): number {
    return this.paymentParams.term * 26;
  }

  get periodRate(): number {
    return this.paymentParams.interestRate / 26;
  }
}

