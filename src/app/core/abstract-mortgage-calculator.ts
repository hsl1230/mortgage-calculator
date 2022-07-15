import { MortgageCalculator } from './mortgage-calculator';
import { PaymentParams } from "./models/payment-params";
export abstract class AbstractMortgageCalculator implements MortgageCalculator {
  constructor(private _paymentParams: PaymentParams) { }
  get paymentParams(): PaymentParams {
    return this._paymentParams;
  }
  get monthlyPayment(): number {
    let monthlyRate = this._paymentParams.interestRate / 12;
    let p = Math.pow(1 + monthlyRate, this.amortizationPeriod);
    return this._paymentParams.mortgageAmount * monthlyRate * p / (p - 1);
  }

  get amortizationPeriod(): number {
    return this._paymentParams.amortizationPeriodYear * 12 + this._paymentParams.amortizationPeriodMonth;
  }

  abstract get mortgagePayment(): number;

  abstract get numberOfPayments(): number;

  abstract get numberOfPaymentsInTerm(): number;

  abstract get periodRate(): number;
}
