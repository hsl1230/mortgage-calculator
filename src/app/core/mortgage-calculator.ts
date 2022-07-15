import { PaymentParams } from "./models/payment-params";
export interface MortgageCalculator {
  get paymentParams(): PaymentParams;
  get amortizationPeriod(): number;
  get monthlyPayment(): number;
  get mortgagePayment(): number;
  get numberOfPayments(): number;
  get numberOfPaymentsInTerm(): number;
  get periodRate(): number;
}
