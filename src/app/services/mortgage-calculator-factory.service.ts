import { Injectable } from '@angular/core';
import { PaymentParams } from '../core/models/payment-params';
import { PaymentFrequency } from '../core/models/payment-frequency';
import { MonthlyMortgageCalculator } from '../core/monthly-mortgage-calculator';
import { SemiMonthlyMortgageCalculator } from '../core/semi-monthly-mortgage-calculator';
import { WeeklyMortgageCalculator } from '../core/weekly-mortgage-calculator';
import { AcceleratedWeeklyMortgageCalculator } from '../core/accelerated-weekly-mortgage-calculator';
import { MortgageCalculator } from '../core/mortgage-calculator';
import { BiWeeklyMortgageCalculator } from '../core/bi-weekly-mortgage-calculator';
import { AcceleratedBiWeeklyMortgageCalculator } from '../core/accelerated-bi-weekly-mortgage-calculator';

@Injectable({
  providedIn: 'root'
})
export class MortgageCalculatorFactoryService {
  getCalculator(paymentParams: PaymentParams): MortgageCalculator {
    let calculatorsMap = new Map<PaymentFrequency, MortgageCalculator>([
      [PaymentFrequency.Monthly, new MonthlyMortgageCalculator(paymentParams)],
      [PaymentFrequency.SemiMonthly, new SemiMonthlyMortgageCalculator(paymentParams)],
      [PaymentFrequency.Weekly, new WeeklyMortgageCalculator(paymentParams)],
      [PaymentFrequency.AcceleratedWeekly, new AcceleratedWeeklyMortgageCalculator(paymentParams)],
      [PaymentFrequency.BiWeekly, new BiWeeklyMortgageCalculator(paymentParams)],
      [PaymentFrequency.AcceleratedBiWeekly, new AcceleratedBiWeeklyMortgageCalculator(paymentParams)],
    ])
    const cal = calculatorsMap.get(paymentParams.paymentFrequency);

    if (cal) {
      return cal;
    } else {
      throw Error(`no mortgage calculator can be created for ${paymentParams.paymentFrequency}!`);
    }
  }
}
