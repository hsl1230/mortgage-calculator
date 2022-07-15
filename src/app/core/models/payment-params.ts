import { PaymentFrequency } from './payment-frequency';
export interface PaymentParams {
  mortgageAmount: number;
  interestRate: number;
  amortizationPeriodYear: number;
  amortizationPeriodMonth: number;
  paymentFrequency: PaymentFrequency;
  term: number;
}
