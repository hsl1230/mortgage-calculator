import { MortgageInfo } from './mortgage-info';
import { PaymentParams } from './payment-params';
import { PrepaymentParams } from './prepayment-params';
export interface MortgageResult {
  paymentParams: PaymentParams;
  amortizationPeriod: number;
  prepaymentParams: PrepaymentParams;
  mortgage: MortgageInfo;
  mortgageInTerm: MortgageInfo;
  mortgageWithoutPrepayments: MortgageInfo;
  mortgageWithoutPrepaymentsInTerm: MortgageInfo;
}
