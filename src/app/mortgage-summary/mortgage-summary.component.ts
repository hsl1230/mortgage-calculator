import { Component, Input } from '@angular/core';
import { MortgageResult } from '../core/models/mortgage-result';
import { PaymentFrequency } from '../core/models/payment-frequency';

@Component({
  selector: 'app-mortgage-summary',
  templateUrl: './mortgage-summary.component.html',
  styleUrls: ['./mortgage-summary.component.scss']
})
export class MortgageSummaryComponent {
  @Input() mortgageResult: MortgageResult | undefined;

  get years() {
    return this.mortgageResult ? Math.floor(this.mortgageResult.amortizationPeriod / 12) : '';
  }

  get timeSooner() {
    if (this.mortgageResult) {
      let diff = this.mortgageResult.mortgageWithoutPrepayments.numberOfPayments - this.mortgageResult.mortgage.numberOfPayments;
      if (this.mortgageResult.mortgageWithoutPrepayments.finalPayment > 0) {
        if (this.mortgageResult.mortgage.finalPayment <= 0) {
          diff++;
        }
      } else {
        if (this.mortgageResult.mortgage.finalPayment > 0) {
          diff--;
        }
      }
      switch (this.mortgageResult.paymentParams.paymentFrequency) {
        case PaymentFrequency.Monthly:
          return `${diff} months`;
        case PaymentFrequency.SemiMonthly:
          return `${diff / 2} months`;
        case PaymentFrequency.Weekly:
        case PaymentFrequency.AcceleratedWeekly:
          return `${diff} weeks`
        case PaymentFrequency.BiWeekly:
        case PaymentFrequency.AcceleratedBiWeekly:
          return `${diff * 2} weeks`
      }
    } else {
      return '';
    }
  }

}
