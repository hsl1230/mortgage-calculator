import { PrepaymentFrequency } from "./prepayment-frequency";

export interface PrepaymentParams {
  prepaymentAmount: number;
  prepaymentFrequency: PrepaymentFrequency;
  paymentToStartWith: number;
}
