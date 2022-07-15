import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalculatorParams } from '../models/calculator-params';
import { MortgageCalculateService } from '../services/mortgage-calculate.service';
import { MortgageResult } from '../core/models/mortgage-result';
import { PaymentFrequency } from '../core/models/payment-frequency';
import { PrepaymentFrequency } from '../core/models/prepayment-frequency';
import { PaymentParams } from '../core/models/payment-params';
import { PrepaymentParams } from '../core/models/prepayment-params';

@Component({
  selector: 'app-payment-plan',
  templateUrl: './payment-plan.component.html',
  styleUrls: ['./payment-plan.component.scss']
})
export class PaymentPlanComponent implements OnInit {
  @Output() onCalculate = new EventEmitter<MortgageResult>();

  form: FormGroup;
  calculatorParams = {
    mortgageAmount: 100000,
    interestRate: 5,
    amortizationPeriodYear: 25,
    amortizationPeriodMonth: 0,
    paymentFrequency: 'Monthly',
    term: 5,
    prepaymentAmount: 0,
    prepaymentFrequency: 'OneTime',
    paymentToStartWith: 1
  } as CalculatorParams;

  PaymentFrequency = PaymentFrequency;
  PrepaymentFrequency = PrepaymentFrequency;

  constructor(
    private _fb: FormBuilder,
    private _mortgageCalculateService: MortgageCalculateService) {
    this.form = this._fb.group({
      mortgageAmount: [null, [Validators.required]],
      interestRate: [null, [Validators.required]],
      amortizationPeriodYear: [null, [Validators.required]],
      amortizationPeriodMonth: [null, [Validators.required]],
      paymentFrequency: [null, [Validators.required]],
      term: [null, [Validators.required]],
      prepaymentAmount: [null, [Validators.required]],
      prepaymentFrequency: [null, [Validators.required]],
      paymentToStartWith: [null, [Validators.required]],
    });
    this.form.reset(this.calculatorParams);
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((values) => {
      Object.assign(this.calculatorParams, this.form.getRawValue());
    })
  }

  range(from: number, to: number): number[] {
    let result = [];
    for (let i = from; i <= to; i++) {
      result[result.length] = i;
    }
    return result;
  }

  calculate() {
    const mortgageResult =
      this._mortgageCalculateService.calculate(
        {
          mortgageAmount: this.calculatorParams.mortgageAmount,
          interestRate: this.calculatorParams.interestRate / 100.0,
          amortizationPeriodYear: this.calculatorParams.amortizationPeriodYear,
          amortizationPeriodMonth: this.calculatorParams.amortizationPeriodMonth,
          paymentFrequency: PaymentFrequency[this.calculatorParams.paymentFrequency as keyof typeof PaymentFrequency],
          term: this.calculatorParams.term,
        } as PaymentParams,
        {
          prepaymentAmount: this.calculatorParams.prepaymentAmount,
          prepaymentFrequency: PrepaymentFrequency[this.calculatorParams.prepaymentFrequency as keyof typeof PrepaymentFrequency],
          paymentToStartWith: this.calculatorParams.paymentToStartWith
        } as PrepaymentParams
      );
    this.onCalculate.emit(mortgageResult);
  }
}
