import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MortgageResult } from '../core/models/mortgage-result';

@Component({
  selector: 'app-calculation-summary',
  templateUrl: './calculation-summary.component.html',
  styleUrls: ['./calculation-summary.component.scss']
})
export class CalculationSummaryComponent {
  displayedColumns: string[] = ['category', 'term', 'amortizationPeriod'];

  dataSource: any[] = [];

  constructor(private currencyPipe: CurrencyPipe) { }

  @Input()
  set mortgageResult(cal: MortgageResult) {
    this.dataSource = [
      {
        category: 'Number of Payments',
        term: cal.mortgageInTerm.numberOfPayments,
        amortizationPeriod: cal.mortgage.finalPayment > 1 ? `${cal.mortgage.numberOfPayments} + 1 final payment of ${this.currencyPipe.transform(cal.mortgage.finalPayment, '$')}` : cal.mortgage.numberOfPayments
      },
      { category: 'Mortgage Payment', term: cal.mortgageInTerm.mortgagePayment, amortizationPeriod: cal.mortgage.mortgagePayment },
      { category: 'Prepayment', term: cal.prepaymentParams.prepaymentAmount, amortizationPeriod: cal.prepaymentParams.prepaymentAmount },
      { category: 'Principal Payments', term: cal.mortgageInTerm.principalPayments, amortizationPeriod: cal.mortgage.principalPayments },
      { category: 'Interest Payments', term: cal.mortgageInTerm.interestPayments, amortizationPeriod: cal.mortgage.interestPayments },
      { category: 'Total Cost', term: cal.mortgageInTerm.principalPayments + cal.mortgageInTerm.interestPayments, amortizationPeriod: cal.mortgage.principalPayments + cal.mortgage.interestPayments },
    ];
    if (cal.prepaymentParams.prepaymentAmount > 1) {
      this.dataSource.push({
        category: 'Interest Savings with Prepayment Plan',
        term: cal.mortgageWithoutPrepaymentsInTerm.interestPayments - cal.mortgageInTerm.interestPayments,
        amortizationPeriod: cal.mortgageWithoutPrepayments.interestPayments - cal.mortgage.interestPayments
      });
    }
  }
}
