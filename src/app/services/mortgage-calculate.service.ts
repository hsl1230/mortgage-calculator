import { Injectable } from '@angular/core';
import { PrepaymentProcessorService } from './prepayment-processor.service';
import { PaymentParams } from '../core/models/payment-params';
import { PrepaymentParams } from '../core/models/prepayment-params';
import { MortgageInfo } from '../core/models/mortgage-info';
import { MortgageCalculatorFactoryService } from './mortgage-calculator-factory.service';
import { MortgageCalculator } from '../core/mortgage-calculator';
import { MortgageResult } from '../core/models/mortgage-result';

@Injectable({
  providedIn: 'root'
})
export class MortgageCalculateService {

  constructor(
    private _prepaymentProcessorService: PrepaymentProcessorService,
    private _mortgageCalculatorFactoryService: MortgageCalculatorFactoryService
  ) { }

  private initData(mortgage: MortgageInfo, mortgageCalculator: MortgageCalculator) {
    mortgage.finalPayment = -1;
    mortgage.interestPayments = 0;
    mortgage.mortgagePayment = mortgageCalculator.mortgagePayment;
    mortgage.numberOfPayments = mortgageCalculator.numberOfPayments;
    mortgage.periodRate = mortgageCalculator.periodRate;
    mortgage.principalPayments = 0;
  }

  calculate(paymentParams: PaymentParams, prepaymentParams: PrepaymentParams) {
    let result1 = this._calculate(paymentParams, undefined);
    let result2 = this._calculate(paymentParams, prepaymentParams);
    return {paymentParams, prepaymentParams, ...result1, ...result2 } as MortgageResult
  }

  private _calculate(paymentParams: PaymentParams, prepaymentParams: PrepaymentParams | undefined) {
    const mortgage: MortgageInfo = {} as MortgageInfo;
    const mortgageInTerm: MortgageInfo = {} as MortgageInfo;
    const mortgageCalculator: MortgageCalculator = this._mortgageCalculatorFactoryService.getCalculator(paymentParams);

    this.initData(mortgage, mortgageCalculator);
    this.initData(mortgageInTerm, mortgageCalculator);
    mortgageInTerm.numberOfPayments = mortgageCalculator.numberOfPaymentsInTerm;

    let principalPayments = 0;
    let interestPayments = 0;

    for (let i = 1; i <= mortgageCalculator.numberOfPayments; i++) {
      let interestPayment = (paymentParams.mortgageAmount - principalPayments) * mortgageCalculator.periodRate
      principalPayments += mortgageCalculator.mortgagePayment - interestPayment;

      if (prepaymentParams) {
        principalPayments += this._prepaymentProcessorService.process(i, paymentParams.paymentFrequency, prepaymentParams);
      }

      interestPayments += interestPayment;

      if (i == mortgageCalculator.numberOfPaymentsInTerm) {
        mortgageInTerm.interestPayments = interestPayments;
        mortgageInTerm.principalPayments = principalPayments;
      }

      if (principalPayments - paymentParams.mortgageAmount > 1) {
        principalPayments -= mortgageCalculator.mortgagePayment - interestPayment;
        interestPayments -= interestPayment;

        let finalPrincipalPayment = paymentParams.mortgageAmount - principalPayments;
        let finalInterestPayment = finalPrincipalPayment * mortgageCalculator.periodRate;

        mortgage.numberOfPayments = i - 1;
        mortgage.finalPayment = finalPrincipalPayment + finalInterestPayment;

        principalPayments += finalPrincipalPayment;
        interestPayments += finalInterestPayment;
        break;
      }
    }

    mortgage.principalPayments = principalPayments;
    mortgage.interestPayments = interestPayments;

    if (prepaymentParams) {
      return {
        amortizationPeriod: mortgageCalculator.amortizationPeriod,
        mortgage, mortgageInTerm
      }
    } else {
      return {
        mortgageWithoutPrepayments: mortgage,
        mortgageWithoutPrepaymentsInTerm: mortgageInTerm
      }
    }
  }
}
