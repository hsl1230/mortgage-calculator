import { Injectable } from '@angular/core';
import { PrepaymentFrequency } from '../core/models/prepayment-frequency';
import { PrepaymentParams } from '../core/models/prepayment-params';
import { PaymentFrequency } from '../core/models/payment-frequency';

@Injectable({
  providedIn: 'root'
})
export class PrepaymentProcessorService {
  process(
    paymentNumber: number,
    paymentFrequency: PaymentFrequency,
    params: PrepaymentParams): number {
    if (paymentNumber == params.paymentToStartWith) {
      return params.prepaymentAmount;
    }

    if (paymentNumber > params.paymentToStartWith) {
      switch (params.prepaymentFrequency) {
        case PrepaymentFrequency.OneTime:
          return 0;
        case PrepaymentFrequency.SameAsRegularPayment:
          return params.prepaymentAmount;
        case PrepaymentFrequency.EachYear:
          if (this._isTheFirstPaymentOfTheYear(paymentNumber, paymentFrequency)) {
            return params.prepaymentAmount;
          }
          return 0;
      }
    }
    return 0;
  }

  private _isTheFirstPaymentOfTheYear(paymentNumber: number, paymentFrequency: PaymentFrequency): boolean {
    switch (paymentFrequency) {
      case PaymentFrequency.Monthly:
        return (paymentNumber - 1) % 12 == 0
      case PaymentFrequency.SemiMonthly:
        return (paymentNumber - 1) % 24 == 0;
      case PaymentFrequency.Weekly:
      case PaymentFrequency.AcceleratedWeekly:
        return (paymentNumber - 1) % 52 == 0;
      case PaymentFrequency.BiWeekly:
      case PaymentFrequency.AcceleratedBiWeekly:
        return (paymentNumber - 1) % 26 == 0;
    }
  }
}
